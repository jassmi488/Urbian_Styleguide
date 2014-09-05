[![Connect Joe Public](http://connectjoepublic.com/github.png)](http://connectjoepublic.com)

## [Style Guide](http://joepublicn.com/styleguide/v2)

Shortened URL for device testing: [http://goo.gl/4NQ5zr](http://goo.gl/4NQ5zr)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com)

### Requirements

Ensure that the following are installed on your computer:

1. [Git](http://git-scm.com)
2. [Node.js](http://nodejs.org)

### Getting Started

1. Clone the repository: `git clone git@github.com:connectjoepublic/styleguide.git`
2. Change to the directory you cloned the repository into: e.g. `cd styleguide`
3. Run the node install command which downloads the required Grunt plugins: `npm install`
4. Start the local server and watch task: `grunt serve`

### LESS Structure

```
less/
     base/
        anchors.less
        base.less
        blockquotes.less
        figures.less
        forms.less
        grid.less
        headings.less
        helpers.less
        hr.less
        lists.less
        paragraphs.less
        print.less
        tables.less
     generic/
        mixins.less
        normalize.less
        reset.less
        variables.less
     objects/
        accordion.less
        alert.less
        breadcrumbs.less
        buttons.less
        card.less
        map.less
        media.less
        nav.less
        pagination.less
        social.less
        tabs.less
     style.less
     styleguide.less
```

### Features

- **Breakpoints, Colors, Fonts**
    - `less/generic/variables.less`
- **Clearfix, Fluid Embed, Font Utilities**
    - `less/base/helpers.less`
- **Transform, Transition**
    - `less/generic/mixins.less`

### Components

- [Font Awesome](http://fontawesome.io)
- [jQuery](http://jquery.com)
- [Normalize.css](http://necolas.github.io/normalize.css)
- [Placeholder](http://mths.be/placeholder)
- [Tablesaw](https://github.com/filamentgroup/tablesaw)

### Polyfills

The following scripts are included for **IE8** and below:
- [html5shiv](https://github.com/aFarkas/html5shiv)
- [matchMedia.js](https://github.com/paulirish/matchMedia.js)
- [Respond.js](https://github.com/scottjehl/Respond)

### Inspiration

* [Barebones](http://barebones.paulrobertlloyd.com) by [Paul Robert Lloyd](http://paulrobertlloyd.com)
* [HTML5 Boilerplate](http://html5boilerplate.com) by [H5BP](https://twitter.com/h5bp)
* [Pattern Lab](http://pattern-lab.info) by [Brad Frost](http://bradfrostweb.com) and [Dave Olsen](http://dmolsen.com)
* [Pattern Libraries](http://alistapart.com/blog/post/getting-started-with-pattern-libraries) by [Anna Debenham](http://maban.co.uk)
* [Style Guide Boilerplate](http://bjankord.github.io/Style-Guide-Boilerplate) by [Brett Jankord](http://www.brettjankord.com)
