# Agent guide: Tom Smith Design portfolio

Hugo static site styled with Tailwind CSS 3 + daisyUI 4, deployed on Netlify.

- `npm run dev` runs the Hugo server and the Tailwind watcher together.
- `npm run build:css` produces the minified CSS that is committed to `static/css/tailwind.css`. Run it after adding new Tailwind classes.
- Don't change written copy in `content/` or in the templates unless asked.

## Image optimization (required for every new image)

Every raster image shown on the site must be served as a resized WebP thumbnail with lazy loading and the preloader spinner. Clicking through (the lightbox) serves the full-size original. Apply this whenever an image is added to a template or front matter.

### How it works

- Originals live in `static/images/` and are published untouched.
- `config.toml` mounts `static/images` into `assets/images`. That lets `resources.Get` resize the originals at build time. Resized files are cached in `resources/_gen/`, which is gitignored.
- `layouts/partials/img-sources.html` takes a `/images/...` path and returns `dict "src" "srcset"` with WebP variants. It handles `.jpg`, `.jpeg`, `.png` and `.webp`, and decodes `%20` in paths. For SVG, GIF, MP4 or a missing file, it falls back to the original path with an empty `srcset`.
- `layouts/partials/img.html` renders the full `<img>`: `srcset`, `sizes`, `loading="lazy"` (or eager), `decoding="async"` and `data-preload`.
- Preloader: any element with class `media-frame` shows a spinner until the `[data-preload]` image or video inside it fires `load`/`loadeddata`. The script lives in `layouts/_default/baseof.html` and the styles in `assets/css/tailwind.css`.

### Rules

1. **Render images with the `img.html` partial, never a raw `<img src="/images/...">`.**
   ```go-html-template
   <div class="media-frame relative overflow-hidden rounded-xl bg-base-200 aspect-[4/3]">
     {{ partial "img.html" (dict
         "src"    "/images/portfolio/example/hero.jpg"
         "alt"    "Describe the image"
         "widths" (slice 480 960)
         "sizes"  "(min-width: 768px) 33vw, 50vw"
         "class"  "absolute inset-0 w-full h-full object-cover") }}
   </div>
   ```
2. **Don't use CSS `background-image` for content images.** Background images can't lazy-load or use `srcset`, and they make the page load every original at once. Use an absolutely positioned `<img>` with `object-cover` instead. For a top-anchored crop, add `object-top`.
3. **Wrap every image in a `media-frame` container** so the spinner shows. Give the frame a fixed size or aspect ratio and `bg-base-200` so the layout doesn't jump.
4. **When you only need a URL**, call `img-sources.html` directly and use `.src`. Cases include a video `poster`, JavaScript data attributes, or the homepage hover slideshow (`data-gallery-images`).
   ```go-html-template
   {{ $thumb := (partial "img-sources.html" (dict "src" .src "widths" (slice 800))).src }}
   ```
5. **Lightbox links (`.glightbox` `href`) always point to the original file**, never a thumbnail.
6. **Videos:** if there's no poster image, add `data-preload` to the `<video>` inside a `media-frame` so the spinner shows until it plays. If there is a poster, pass it through `img-sources.html` and don't add `data-preload`.
7. **Set `eager` to `true` only for images visible on first load**, such as the first row of a grid, hero images or the case-study mosaic. Everything else stays lazy.
8. **Pick `widths` to match the displayed size.** Provide roughly 1x and 2x of the largest size the image is shown at:

   | Context | `widths` | Typical `sizes` |
   |---|---|---|
   | Grid thumbnails (3–4 columns) | `(slice 480 960)` | `(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw` |
   | Homepage portfolio cards / slideshow | `(slice 800)` | n/a (single URL) |
   | Blog cards, 2-column grids | `(slice 640 1280)` | `(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw` |
   | Half-width feature images, large mosaic tile | `(slice 800 1600)` | `(min-width: 1024px) 50vw, 100vw` |
   | Full-width banners | `(slice 1024 2048)` | `100vw` |
   | Avatars / headshots | `(slice 320)` | n/a |

### Adding images through front matter

Portfolio pages (`content/portfolio/*.md`), the quick-view page and blog posts already route their images through the partials. Just add entries using the existing format:

```yaml
gallery:
  - src: "/images/portfolio/example/01.jpg"       # thumbnail is generated from this
    lightbox: "/images/portfolio/example/01.jpg"  # original shown on click
    alt: "Describe the image"
  - src: "/images/portfolio/example/video-thumb.jpg"  # for videos, src is the poster image
    lightbox: "/images/portfolio/example/video.mp4"
    alt: "Describe the video"
    video: true
```

Prefer JPG, PNG or WebP source files no wider than about 2400px. GIFs and SVGs aren't resized. Large GIFs should be converted to MP4 instead.

### Known gaps

- Images embedded as raw HTML inside Markdown bodies (blog posts) are not processed. Don't rewrite post content to change this unless asked.
- The MVB hero background (`bg-[url('/images/hero-image-desktop.webp')]` in `layouts/minimum-viable-brand/single.html`) is still a CSS background.
- The unused legacy partials (`hero.html`, `pricing.html`, `testimonials.html`, etc.) still use old Flowbite markup and raw images.

### Verify before finishing

1. `npm run build:css`, if you added new Tailwind classes.
2. `hugo --gc --minify` builds with no errors, and the "Processed images" count goes up for any new images.
3. In the built HTML, new images have a `/images/...webp` `src`/`srcset` (not the original) and sit inside a `media-frame` element.
4. The first build after adding many images can take a while (about 25s for around 430 resizes); later builds use the cache.
