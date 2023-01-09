<p align="center">
  <img src="./assets/logo.jpg" alt="generator-css-variables logo" width="375" height="168">
  <h1 align="center">Generator-css-variables</h1>
</p>
<p align="center">
    <a aria-label="NPM version" href="https://www.npmjs.com/package/generator-css-variables">
      <img alt="npm" src="https://img.shields.io/npm/v/generator-css-variables?color=f8b696">
    </a>
    <a aria-label="License" href="https://github.com/UrijHoruzij/generator-css-variables/LICENSE.md">
      <img alt="NPM" src="https://img.shields.io/npm/l/generator-css-variables?color=f8b696">
    </a>
  </p>

This command line tool allows you to quickly create css variables for themes

## Getting Started

To get started, use the following code:

```js
const light = {
	name: 'light',
	'font-family': 'PT Sans, sans-serif',
	'font-size': '16px',
	'font-weight': 400,
	
};
const dark = {
	name: 'light',
	'font-family': 'PT Sans, sans-serif',
	'font-size': '16px',
	'font-weight': 400,
	
};
export default [light, dark];
```

```js
import themes from './config/index.mjs';
import generator from 'generator-css-variables';

generator.default(themes, { path: 'src/themes/', pretty: true });
```

## License

Generator-css-variables is released under the [MIT License](https://github.com/UrijHoruzij/generator-css-variables/blob/master/LICENSE).
