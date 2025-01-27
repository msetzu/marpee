# Marpee

[Themes](https://github.com/msetzu/marpee/tree/master/css/themes) | [Gallery](https://github.com/msetzu/marpee/tree/gallery/)

Online repository of several [Marp](https://marp.app) styles: write your slides in Markdown!

<img src="https://raw.githubusercontent.com/marp-team/marp-cli/main/docs/images/marp-cli.gif">

---

## Quickstart
Marp is a Markdown compiler which creates (in my opinion) beautiful slides.
Installation instruction available on the [Marp github](https://github.com/marp-team/marp-cli?tab=readme-ov-file#install).
After installation, a presentation `presentation.md` can be compiled with
```shell
marp-cli --html presentation.md
```
which generates a `presentation.html` file. Alternative compilation targets include `pdf` and `pptx`.

Current supported version: `marp-cli 3.4.0`.
Current supported compilation target: `html`.


### Themes
Includes two themes:

- `unipi` (`css/themes/unipi.css`) *Unofficial* theme used for slides at University of Pisa.
- `xai` (`css/themes/xai.css`) *Unofficial* theme for the [XAI ERC project](https://xai-project.eu/).

It also includes a base theme for documents, which are generated with a pandoc `MD > HTML > PDF` pipeline:
```
pandoc --mathjax --toc --standalone -f markdown -t html {$IN}.md -o {$OUT}.html
```
The html is then exported in the browser.
This allows to introduce `css` styling in the pdf.


### Templates
`templates/` offers a set of useful templates, e.g., two-columns slide


### Viewports
`html` compilation may behave slightly differently on different viewports.
To tackle this, `css/scaling` provides different `css` files to adapt:
- `px1280_720.css` for HD viewports
- `px1920_1080.css` for full HD viewports
- `px960_720.css` for 720p viewports

Currently, only the `p1280_720` viewport is in active development/maintenance.

### Headers
Themes use several frameworks. Include the following in your presentations.

##### Theme
```html
<!-- Theme -->
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/themes/base.css">
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/themes/unipi.css">
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/themes/colors.css">
```

##### Viewport
```html
<!-- Slide size: change according to your desired viewport -->
<link
    rel="stylesheet"
    type="text/css",
	href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/scaling/px1280_720.css">

<link
    rel="stylesheet"
    type="text/css",
	href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/css/scaling/sizing.css">
```

##### Fonts
```html
<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

#### Jquery & Semantic UI
```html
<!-- Semantic UI -->
<script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
<script
    src="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/libs/semanticui/semantic.min.js"></script>
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css">
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/libs/semanticui/override.css">
```

#### Mermaid
[Mermaid.js](https://mermaid.js.org) is a library for creating diagrams and charts.
```html
<!-- Mermaid -->
<script
    src="https://cdn.jsdelivr.net/npm/mermaid@10.3.0/dist/mermaid.min.js"></script>
<link
    rel="stylesheet"
    type="text/css",
    href="https://cdn.jsdelivr.net/gh/msetzu/marpee@latest/assets/libs/mermaid/mermaid.css">
```

