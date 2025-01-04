<h1 align="center">
  <a href="https://www.svix.com">
    <img width="120" src="https://avatars.githubusercontent.com/u/80175132?s=200&v=4" />
    <p align="center">Svix - Webhooks as a service</p>
  </a>
</h1>

svix-fetch is a fork of Matthew Andrew's wonderful WHATWG Fetch polyfill for node and bowserfy: [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch).

The main purpose of this fork is to enable keepalives when running in a node context.

Unless you have a specific need for this functionality we recommend using [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch).

## Installation

### NPM

```sh
npm install --save svix-fetch
```

### Bower

```sh
bower install --save svix-fetch
```

## Usage

```js
require('svix-fetch');

fetch('//offline-news-api.herokuapp.com/stories')
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error("Bad response from server");
		}
		return response.json();
	})
	.then(function(stories) {
		console.log(stories);
	});
```

## License

This code is licenced under the MIT licence.  Based on [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) by **[matthew-andrews](https://github.com/matthew-andrews)**.

## Alternatives

- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch).
- [cross-fetch](https://github.com/lquixada/cross-fetch#why-not-isomorphic-fetch)
- Using [node-fetch](https://github.com/node-fetch/node-fetch) and the [Fetch polyfill](https://github.com/github/fetch) directly (or from [polyfill.io](https://polyfill.io), or relying on [the browser's implementation of the Fetch API](https://caniuse.com/fetch)).
