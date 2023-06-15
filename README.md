# tailwind-attributes-selectors

Tailwind plugin for creating custom attributes selectors

## Installation

Install the plugin from npm:

```sh
npm install tailwind-attributes-selectors
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
const config = {
  "role-dialog": ["role", "=", "dialog"],       // matches [role="dialog"]  - an element with the role attribute set to "dialog"
  "is-external-link": ["href", "^=", "http"],   // matches [href^="http"]   - an element with the href attribute starting with "http"
  "has-role": "role",                           // matches [role]           - an element with the role attribute set
}

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwind-attributes-selectors")(config),
    // ...
  ],
}
```

## Usage

In your template you can use any of the keys of the config object as classes

Example (with the above config):
```html
<div role="dialog" class="role-dialog:background-white">...</div>
<a href="https://example.com" class="is-external-link:background-white">...</a>
<div role="whatever" class="has-role:background-white">...</div>
```

This can became super useful when working with components when you don't know which attributes will be passed to a certain component

## License

[MIT](./LICENSE)
