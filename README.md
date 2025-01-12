<div align="center">
  <img src="https://github.com/user-attachments/assets/4e0a0b81-7814-48b1-ae3d-9ce0511e0e9c" width="120" height="120" alt="logo" />
  <h1>@configurajs/eslint</h1>
  <p>A simple eslint flat configuration</p>
  <p>
    <span>English</span> | 
    <a href="https://github.com/configurajs/eslint/blob/main/README.zh-CN.md">中文介绍</a>
  </p>
  <p>
    <img src="https://img.shields.io/github/package-json/v/configurajs/eslint" alt="version">
    <img src="https://img.shields.io/github/stars/configurajs/eslint" alt="stars">
    <img src="https://img.shields.io/github/license/configurajs/eslint" alt="license">
  </p>
</div>

---

## Features

- 📦 &nbsp; Support javascript presets
- 📦 &nbsp; Support typescript presets
- 📦 &nbsp; Support vue(2 and 3) presets
- 📦 &nbsp; Support react presets
- 📦 &nbsp; Support jsx presets
- 📦 &nbsp; Support eslint comments presets
- 📦 &nbsp; Support overrides eslint config

## Quick Start

### Installation

```shell
# npm
npm i @configurajs/eslint -D
# yarn
yarn add @configurajs/eslint -D
# pnpm
pnpm add @configurajs/eslint -D
```

### Usage

```js
// eslint.config.js
import { defineConfig } from '@configurajs/eslint'

export default defineConfig()
```

OR

```js
// eslint.config.js
const { defineConfig } = require('@configurajs/eslint')

module.exports = defineConfig()
```

### Switch Framework Presets

Switching framework presets requires manual setup.

#### Vue2

```js
// eslint.config.js
import { defineConfig } from '@configurajs/eslint'

export default defineConfig({
  vue: { version: 2 },
})
```

#### React

```js
// eslint.config.js
import { defineConfig } from '@configurajs/eslint'

export default defineConfig({
  vue: false,
  react: true,
})
```

### Options

```js
// prettier.config.js
import { defineConfig } from '@configurajs/eslint'

export default defineConfig({ ... })
```

```ts
export interface DefineConfigOptions {
  /**
   * Enable TypeScript support
   * @default true
   */
  ts?: boolean
  /**
   * Enable JSX support
   * @default true
   */
  jsx?: boolean
  /**
   * Enable Vue support, version 3 by default
   * @default true
   */
  vue?: boolean | { version: 2 | 3 }
  /**
   * Enable React support
   * @default false
   */
  react?: boolean
  /**
   * Enable eslint comments support
   * @default true
   */
  comments?: boolean
  /**
   * Custom rules
   */
  rules?: Linter.RulesRecord
  /**
   * Ignore files
   */
  ignores?: string[]
  /**
   * Override eslint configs
   */
  overrides?: Linter.Config[]
}
```

## Contributors

<a href="https://github.com/configurajs/eslint/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=configurajs/eslint" />
</a>

## ChangeLog

[ChangeLog](CHANGELOG.md)

## License

[MIT](LICENSE)

## Inspired By

This project structure is inspired by [antfu-eslint-config](https://github.com/antfu/eslint-config).
