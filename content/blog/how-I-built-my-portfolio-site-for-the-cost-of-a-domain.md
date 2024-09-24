---
title: "How I Built My Portfolio Site for the Cost of a Domain"
Description: "I built and deployed my portfolio site for the cost of a domain using Hugo, Tailwind CSS, Flowbite, and Netlify."
date: 2024-08-30T12:00:00Z
author: "Tom Smith"
type: "post"
author_image: "/images/avatar-top.png"
author_bio: "Creative Director & Designer"
category: "Education"
featured_image: "/images/gallery-01.png"
summary: "I built and deployed my portfolio site for the cost of a domain using Hugo, Tailwind CSS, Flowbite, and Netlify."
reading_time: 5
---

<h2 class="text-2xl font-bold text-gunmetal">Life got cheaper once I learned how to code.</h2>

<p class="text-gunmetal">I used to be a big proponent of Wordpress (and still think it's a great CMS solution for smaller companies and marketing firms), but life really did get a lot easier once I finally bit the bullet and learned how to code. While Wordpress is a great option with a low-barrier to entry, its best tools are seldom open-source, the hosting solutions that I could figure out were pricey, and the age-old practice of uninstalling plugins to find out what was breaking the site was infuriating.</p>

<p class="text-gunmetal">The CEO at PKGX/tea Protocol was staunchly against Wordpress and visual page builders, which makes sense, given they were developer-focused companies. Anyways, we had a small team and were staring down the barrel of a major website redesign. I had my basic understanding of HTML and CSS, but it wasn't until this project that I really embarked on the trial by fire of building an entire website from the ground up. I polished up my basic markup skills, taught myself Javascript via a Udemy course, and familiarized myself with the pertinent open-source tools.</p>

<p class="text-gunmetal">That development project is how I fell in love with the CMS and templating solution that I used for this site: Hugo. And so without further ado, let's dive into how I built this portfolio site for the cost of a domain.</p>

<h2 class="text-2xl text-gunmetal">I used Hugo for CMS & templating (zero dollars).</h2>

<p class="text-gunmetal">Hugo is a static site generator and is now my favorite method for DRY (don't repeat yourself) development. The thing I loved most about Hugo was that, aside from Hugo itself, I didn't need to learn some new syntax like JSX in order to get started. I could use my my trusty HTML and vanilla Javascript and still create reusable components via Hugo partials.</p>

<p class="text-gunmetal">The other great thing about Hugo is that it's built for blogging. This made it a great spiritual successor to my affinity for Wordpress, and also gave us a CMS solution is pump out shareable content and really shine a spotlight on the company. Hugo's Markdown syntax for posts and content files further lowers the barrier to entry for anyone to contribute, but were I to implement a Hugo site at another company in the future, I would certainly add some sort of headless CMS or facilitate contributions form anyone in the company (regardless of technical aptitude).</p>

<p class="text-gunmetal">Hugo has been great for this site because its powered this blog (which you're reading now) and has enabled me to build a site that's personal to me with a stack that I truly enjoy using.</p>

<h2 class="text-2xl text-gunmetal">And I used Tailwind CSS for styling (zero dollars).</h2>

<p class="text-gunmetal">I was originally big into Bootstrap, but have since fallen in love with Tailwind as my go-to CSS framework. The classes seem a bit more intuitive and the config paradigm is a bit easier to wrap my head around. It also seems to have secured market share in terms of the tools that are built on-top of Tailwind, or at least with Tailwind in mind.</p>

<p class="text-gunmetal">There weren't really any starter templates for a 'Hugo x Tailwind' site, so I created this one from scratch. It took a little bit of doing at the offset, but now it's simply a joy to work with. If you find yourself in a similar position, or if this post had inspired you to mimic the stack, feel free to check out <a href="https://github.com/tsmitty11/portfolio-site" target="_blank" class="text-blue-700">my Github repo</a>.</p>

<p class="text-gunmetal">One mistake I made with CSS frameworks early on was not taking the time to properly learn the built-in classes, and instead, injecting a ton of inline css (which slowed my sites down significantly). With this site, I used a little CSS as possible and instead have taken the time to extend of my config file and use the right Tailwind classes. As a result, the site's performance has been pretty snappy if I do say so myself.</p>

<h2 class="text-2xl text-gunmetal">Flowbite provided the beautiful components (zero dollars*).</h2>

<p class="text-gunmetal"><a href="https://flowbite.com/docs/getting-started/introduction/" target="_blank" class="text-blue-700">Flowbite</a> is a library of components built with Tailwind. They've really got a fantastic repository of starter components and layouts, especially in regards to their marketing UI. I used to be a purest when it came to UI, not wanting to design with any pre-existing libraries and instead scrutinize the border radius of my own custom-made cards for hours on end. But when you're on a small team or just going at it on your own, it really gives you a big head-start to take these tried-and-true design elements and put your own spin on them.</p>

<p class="text-gunmetal">From a design perspective, one of the best things about Flowbite is how comprehensive and in-sync their Figma file are with their actual components. It's been a breeze to design and ideate my site, wire the code up, and have it look exactly the same without a ton of leg work.</p>

<p class="text-gunmetal"><span class="font-semibold">*Note:</span> I've since purchased Flowbite Pro for access to a more extensive library of components and blocks, and I used some of those for this site. So while this site is not completely free, it could have been developed and deployed for free with the stack outlined in this post.</p>

<h2 class="text-2xl text-gunmetal">I deployed and am hosting with Netlify (zero dollars).</h2>

<p class="text-gunmetal">The days of using an expensive Wordpress multi-site solution are over. I got turned on to Netlify when I had to build and deploy a site for tea in the span of two days, and Netlify was user-friendly and enabled me to deploy and host without needing to go through the rigmarole of securing a payment method from the company.</p>

<p class="text-gunmetal">Since then, Netlify has become my go-to hosting solution, especially for Hugo sites. And, it's free until I reach the bandwidth and built-time limits, which I don't appear to be closing in on anytime soon.</p>

<h2 class="text-2xl text-gunmetal">I purchased the tomsmith.design domain years ago (30 dollars).</h2>

<p class="text-gunmetal">I've been sitting on this domain for years. The .design TLD was advertised to me at one point or another, and so I snatched up the 'Tom Smith' URL before one of the other Tom Smiths did. I'm sure I've paid renewal costs and what not, but in essence, that's been the only major cost with building this portfolio site!</p>

<p class="text-gunmetal">Anyway, hope you found this post interesting. If you'd like to check out the site on Github, <a href="https://github.com/tsmitty11/portfolio-site" target="_blank" class="text-blue-700">you can do so here</a>. See you in the next post!</p>

<h2 class="text-2xl text-gunmetal">Also: A quick note about the design inspiration for this site.</h2>

<p class="text-gunmetal">My creative process has always started with a Moleskin sketchbook. In fact, I have stacks of them at this point. I wanted this website to look like an elevated sketchbook page. The Ivory background color is a direct tie-back to Moleskin. Furthermore, the singular color, separated only by the black line work, is very similar to how my sketchbooks look: no color, just mechanical pencil and sometimes pen. </p>

