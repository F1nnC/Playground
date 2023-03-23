## The Reunion Project

Usage

1. Midnight Theme. Use the GitHub Pages [Midnight Theme](https://github.com/pages-themes/midnight/blob/master/README.md) as a resource.  This project started with customization of _layouts/default.html from the Midnight Theme.  If you wanted to use a different [GitHub Pages Themes](https://pages.github.com/themes/), you would similarly change `_layouts/default.html` from repo used to support that theme.  Observe comment at top of _layouts/default.html ...

```html
<!-- 
  _layouts/default.html
  customization to original Midnight theme 
  found through GitHub Pages Themes
 -->
```

2. Preview Site (Option A) - [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).  This instruction provides instructions for ruby `Gemfile`,`bundle install`.  As an addition add `.gitignore` to avoid seeing build files in commit.   After pre-requisites run this command to obtain prompt for web server ...

```bash
bundle exec jekyll serve -H 0.0.0.0 -P 4001 # -H and -P are optional
```
3. Install Nix and run using a Nix shell (Option B).  This should be quicker than Docker and more reliable than previous.

```bash
sh <(curl -L https://nixos.org/nix/install) # installs nix requires root password

# restart terminal as shell is updated, then cd ~/vscode/project-dir assuming you have it cloned

nix-shell # start shell, aka nix os virtual environment
code . # activate VSCode in current directory

# open vscode terminal

bundle install # only need to run once, first time. If this command doesn't work, delete your github repo, and reclone it. 

bundle exec jekyll serve # run server

bundle exec jekyll serve --livereload --force_polling # if you are on WSL/windows and the above command doesn't work, try this.

```

4. Preview Site (Option C) - [GitHub Pages Ruby Gem](https://github.com/github/pages-gem) has additional information on making a local server.  Ruby requirements are the same: `Gemfile`,`bundle install`.   This README looks like basis of FastPages `make server` as it uses Docker and shows how to setup a `Makefile`.

5. Customizing style (CSS).  This project uses `/assets/css/style.scss` as the location to customize your CSS. To avoid warnings in VSCode make sure you install `SCSS IntelliSense` plugin.  To understand default style, make sure you ***Preview Site*** and refer to build generated `_site/assets/css/style.css` (this is worth 1000 lectures).  For the reunion site `gallery.md` uses custom style from `assets/css/style.css` to support 3 images per row.  Observe file and position of import and custom CSS, order is important as clarified in Midnight Theme readme. ...

```css
---
---

@import "{{ site.theme }}";

/* "row style" is flexible size and aligns pictures in center */
.row {
    align-items: center;
    display: flex;
  }
  
  /* "column style" is one-third of the width with padding */
  .column {
    flex: 33.33%;
    padding: 5px;
  }
```

