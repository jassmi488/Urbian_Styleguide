## [Boilerplate Style Guide](http://static.wearenext.co.za/styleguide/styleguide)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com)
[![Build Status](https://magnum.travis-ci.com/we-are-next/styleguide.svg?token=4q8vnSqGs4oqaN95p1Pp)](https://magnum.travis-ci.com/we-are-next/styleguide)

### Requirements

Ensure that the following is installed on your computer:

1. [Git](http://git-scm.com)
2. [Node.js](http://nodejs.org)

### Getting Started

1. Clone the repository: `git clone git@github.com:we-are-next/styleguide.git`
2. Change to the directory you cloned the repository into: e.g. `cd styleguide`
3. Install the required dependencies: `npm install`
4. Start a local server: `npm start`

### Validation

1. HTML: `grunt validation:build`
2. CSS: `grunt csslint:build`
3. JavaScript: `grunt jshint:build`

### Deploying

1. Update the FTP server credentials in the `.ftppass` file
2. Update the FTP deployment paths for the `ftp-deploy` task in `Gruntfile.js`
3. Run the task: `grunt deploy`

### Features

- **Breakpoints, Colors, Fonts**
    - `less/generic/variables.less`
- **Clearfix, Colors, Display, Embeds, Text Utilities**
    - `less/base/utilities.less`
- **Transforms, Transitions**
    - `less/generic/mixins.less`

### Components

- [Normalize.css](http://necolas.github.io/normalize.css)
- [jQuery](http://jquery.com)
- [Font Awesome](http://fontawesome.io)
- [Modal](http://getbootstrap.com/javascript/#modals)
- [Placeholder](http://mths.be/placeholder)
- [Slick](http://github.com/kenwheeler/slick)
- [Tooltip](http://getbootstrap.com/javascript/#tooltip)

### Polyfills

The following scripts are included for **IE8** and below:

- [html5shiv](https://github.com/aFarkas/html5shiv)
- [matchMedia.js](https://github.com/paulirish/matchMedia.js)
- [Respond.js](https://github.com/scottjehl/Respond)
