Marionette + ES6 project
======================
> This project provides a prepared development environment based on **Backbone.Marionette**, **Babel** and **Webpack**. You can use it to quickly bootstrap your web application projects.
 
This project uses follow components under the hood:

 - Browserify
 - Babelify
 - Backbone
 - Marionette
 - Handlebars
 - Karma (Mocha, Chai, Sinon)
 - Webpack
 - eslint

Installation
-----
Clone the repository and install the dependencies. Do not forget to install globally `webpack` if installed yet.

    $ git clone https://github.com/noveogroup-amorgunov/marionette-es6 my-project
    $ cd my-project
    $ npm install

Usage
------
To build the project run the follow command. It will compile the project and put the result under `dist` directory. Also it will watch files changes and compile project again. 

    $ npm run bundle

To test project run.

    $ npm run test
