import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import { Linter } from 'eslint'
import { createConfigName } from '../utils'

export interface CreateVueConfigOptions {
  ts: boolean
}

export function createVueConfig(options: CreateVueConfigOptions): Linter.Config[] {
  const { ts } = options

  return [
    {
      name: createConfigName('vue/setup'),
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly',
        },
      },
      plugins: {
        vue: vuePlugin,
      },
    },
    {
      name: createConfigName('vue/parser'),
      files: ['**/*.vue'],
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          sourceType: 'module',
          parser: ts ? tsParser : undefined,
        },
      },
      processor: vuePlugin.processors['.vue'],
    },
    {
      name: createConfigName('vue/rules'),
      files: ['**/*.vue'],
      rules: {
        ...vuePlugin.configs.base.rules,
        ...vuePlugin.configs['vue3-essential'].rules,
        ...vuePlugin.configs['vue3-recommended'].rules,
        'vue/multi-word-component-names': 'off',
        'vue/require-component-is': 'off',
        'vue/return-in-computed-property': 'off',
        'vue/use-v-on-exact': 'off',
        'vue/no-v-html': 'off',
        'vue/order-in-components': 'off',
      },
    },
  ]
}
