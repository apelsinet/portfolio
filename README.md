# Apelsinet portfolio

This portfolio is built using the [React Slingshot](https://github.com/coryhouse/react-slingshot) starter boilerplate. It uses technologies like [React](https://facebook.github.io/react/), [React Router](https://github.com/reactjs/react-router), [Babel](http://babeljs.io), [Webpack](http://webpack.github.io) and [Browsersync](https://www.browsersync.io/). The stylesheets are written using [SASS](http://sass-lang.com/) with [Autoprefixer](https://github.com/postcss/autoprefixer) to avoid using vendor-prefixes in the source code.

## How to build the project

You need the following dependencies to build this project locally.

1. [Git](https://git-scm.com/downloads) - to clone the project.
2. [Node 4.0.0 or greater](https://nodejs.org) - (5.0 or greater is recommended for optimal build performance).
3. [Node-gyp](https://github.com/nodejs/node-gyp) - to compile some of the dependencies. This tool might, depending on your OS, need a few more dependencies to get up and working. Check out the documentation for more info.

Once you have what's needed. Install the required node modules using `npm install`. After installing all dependencies, you can build the project either in developer mode using `npm start` or in production mode using `npm run build`. Both scripts will start a browser-sync server and hot-reload the webpage. The latter will also populate the /dist/ folder in case you want to serve the files using other server software.
