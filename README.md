# A simple Webpack-React starter project

Use this as a base project to build awesome things ** or even better, learn how this was built and how everything works ! **

## Setup
Clone or download this project.

Delete the `.git` folder if you want to use yours.

Run `npm install` or `npm i`.

## Available commands

* `npm run dev`: Starts a development server
* `npm run build`: Builds the project to the `dist` folder
* `npm run clean`: Deletes the `dist` folder
* `npm start` or `npm run start`: Starts the server in production

## Features

* Express server
* Webpack
* HMR (In dev.)
* Babel transpiling ES6(ES2015) -> ES5
* React

This project uses the latest React Hot Loader (3.0.0.beta-2).

It hot reloads stateless components as well as regular components !

## Notes

### Modules to consider adding
> Pick and use only if necessary. Depends on project you're building.

* CSS:
  - [JSS](https://github.com/jsstyles/jss)
  - [CSS Loader](https://github.com/webpack/css-loader) + [Postcss + Autoprefixer](https://github.com/postcss/postcss-loader) + [Extract Text Webpack Plugin](https://github.com/webpack/extract-text-webpack-plugin)
* [React-Router](https://github.com/reactjs/react-router)
* [Redux + devtools](https://github.com/reactjs/redux)
* [Relay + GraphQL](https://facebook.github.io/relay/)
* [Just GraphQL](http://graphql.org/)
* [Anything else](https://react.parts/web)

### For server side rendering:

> Use server side rendering if needed.

> Read the documentation of the modules you've implemented to see how it's done (step 3 and 4).

1. Remove `HTMLWebpackPlugin` in production
2. Include in the HTML the generated chunks using the `webpack.stats.json` file
3. Render the app to string
4. Inject in HTML
5. Serve

### Todo

* Fix the import/no-unresolved eslint rule
* Maybe more. Open an issue and let's talk about what we can improve !
