<div align="center">
  <img src="https://github.com/user-attachments/assets/4e0a0b81-7814-48b1-ae3d-9ce0511e0e9c" width="120" height="120" alt="logo" />
  <h1>@configurajs/eslint</h1>
  <p>一个简单易用的扁平化 eslint 预设</p>
  <p>
    <span>中文</span> | 
    <a href="https://github.com/configurajs/eslint/blob/main/README.md">English</a>
  </p>
  <p>
    <img src="https://img.shields.io/github/package-json/v/configurajs/eslint" alt="version">
    <img src="https://img.shields.io/github/stars/configurajs/eslint" alt="stars">
    <img src="https://img.shields.io/github/license/configurajs/eslint" alt="license">
  </p>
</div>

---

## 功能

- 📦 &nbsp; 支持 javascript 预设
- 📦 &nbsp; 支持 typescript 预设
- 📦 &nbsp; 支持 vue(2 和 3) 预设
- 📦 &nbsp; 支持 react 预设
- 📦 &nbsp; 支持 vitest 预设
- 📦 &nbsp; 支持 jsx 预设
- 📦 &nbsp; 支持 eslint comments 预设
- 📦 &nbsp; 支持覆盖 eslint 配置

## 快速开始

### 安装

```shell
# npm
npm i @configurajs/eslint -D
# yarn
yarn add @configurajs/eslint -D
# pnpm
pnpm add @configurajs/eslint -D
```

### 用法

```js
// eslint.config.js
import { defineConfig } from '@configurajs/eslint'

export default defineConfig()
```

或

```js
// eslint.config.js
const { defineConfig } = require('@configurajs/eslint')

module.exports = defineConfig()
```

### 切换框架预设

切换框架预设需要通过手动设置。

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

### 更多选项

```js
// prettier.config.js
import { defineConfig } from '@configurajs/eslint'

export default defineConfig({ ... })
```

```ts
export interface DefineConfigOptions {
  /**
   * 启用 TypeScript 支持
   * @default true
   */
  ts?: boolean
  /**
   * 启用 JSX 支持
   * @default true
   */
  jsx?: boolean
  /**
   * 启用 Vue 支持，默认为版本 3
   * @default true
   */
  vue?: boolean | { version: 2 | 3 }
  /**
   * 启用 React 支持
   * @default false
   */
  react?: boolean
  /**
   * 启用 Vitest 支持
   * @default true
   */
  vitest?: boolean
  /**
   * 启用 eslint 注释支持
   * @default true
   */
  comments?: boolean
  /**
   * 自定义规则
   */
  rules?: Linter.RulesRecord
  /**
   * 忽略文件
   */
  ignores?: string[]
  /**
   * 覆盖 eslint 配置
   */
  overrides?: Linter.Config[]
}
```

## 贡献者

<a href="https://github.com/configurajs/eslint/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=configurajs/eslint" />
</a>

## 更新日志

[ChangeLog](CHANGELOG.md)

## 协议

[MIT](LICENSE)

## 项目参考

本项目架构参考自 [antfu-eslint-config](https://github.com/antfu/eslint-config)。
