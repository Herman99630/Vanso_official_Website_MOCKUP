# Blog content handoff

Published entries live in `src/data/blogPosts.js`. The featured entry also appears in All Posts. Only approved content is included; demo articles have been removed.

- `seoTitle` and `metaDescription` drive the article route's document title and description.
- Author and ISO publication date are editorial fields. Dates render in English with a UTC date boundary.
- Reading time is calculated from article text at 200 words/minute, rounded up (minimum one minute). Images and HTML tags do not count.
- Article HTML is trusted repository content, never raw visitor input.
- Halloween artwork is stored in `assets/blog/`; no temporary Feishu URLs are used.
- The Halloween CTA links to `/download`, with hover, pressed and keyboard-focus states.
- An empty related-post list is not displayed.
- This preview retains the existing noindex settings. Production SEO/rendering and launch configuration must be reviewed separately by H5.
