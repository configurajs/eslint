import tsParser from '@typescript-eslint/parser'
import { Linter } from 'eslint'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import { createConfigName } from '../utils'

export interface CreateVueConfigOptions {
  ts: boolean
  version: 2 | 3
}

export function createVueConfig(options: CreateVueConfigOptions): Linter.Config[] {
  const { ts, version } = options

  const rules: Partial<Linter.RulesRecord> =
    version === 2
      ? {
          'vue/comment-directive': 'error',
          'vue/no-multiple-template-root': 'error',
          'vue/no-v-for-template-key': 'error',
          'vue/no-v-model-argument': 'error',
          'vue/valid-v-bind-sync': 'error',
        }
      : {
          'vue/no-v-for-template-key-on-child': 'error',
          'vue/no-deprecated-data-object-declaration': 'error',
          'vue/no-deprecated-destroyed-lifecycle': 'error',
          'vue/no-deprecated-dollar-listeners-api': 'error',
          'vue/no-deprecated-dollar-scopedslots-api': 'error',
          'vue/no-deprecated-events-api': 'error',
          'vue/no-deprecated-filter': 'error',
          'vue/no-deprecated-functional-template': 'error',
          'vue/no-deprecated-html-element-is': 'error',
          'vue/no-deprecated-inline-template': 'error',
          'vue/no-deprecated-props-default-this': 'error',
          'vue/no-deprecated-router-link-tag-prop': 'error',
          'vue/no-deprecated-scope-attribute': 'error',
          'vue/no-deprecated-slot-attribute': 'error',
          'vue/no-deprecated-slot-scope-attribute': 'error',
          'vue/no-deprecated-v-bind-sync': 'error',
          'vue/no-deprecated-v-is': 'error',
          'vue/no-deprecated-v-on-native-modifier': 'error',
          'vue/no-deprecated-v-on-number-modifiers': 'error',
          'vue/no-deprecated-vue-config-keycodes': 'error',
          'vue/no-lifecycle-after-await': 'error',
          'vue/valid-v-is': 'error',
          'vue/valid-v-memo': 'error',
          'vue/require-slots-as-functions': 'error',
          'vue/require-toggle-inside-transition': 'error',
          'vue/prefer-import-from-vue': 'error',
          'vue/no-watch-after-await': 'error',
          'vue/no-expose-after-await': 'error',
        }

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
        'vue/comment-directive': 'error',
        'vue/jsx-uses-vars': 'error',
        'vue/no-arrow-functions-in-watch': 'error',
        'vue/no-async-in-computed-properties': 'error',
        'vue/no-child-content': 'error',
        'vue/no-computed-properties-in-data': 'error',
        'vue/no-dupe-keys': 'error',
        'vue/no-dupe-v-else-if': 'error',
        'vue/no-duplicate-attributes': 'error',
        'vue/no-export-in-script-setup': 'error',
        'vue/no-mutating-props': 'error',
        'vue/no-parsing-error': 'error',
        'vue/no-ref-as-operand': 'error',
        'vue/no-reserved-component-names': 'error',
        'vue/no-reserved-keys': 'error',
        'vue/no-reserved-props': 'error',
        'vue/no-shared-component-data': 'error',
        'vue/no-side-effects-in-computed-properties': 'error',
        'vue/no-template-key': 'error',
        'vue/no-textarea-mustache': 'error',
        'vue/no-unused-components': 'error',
        'vue/no-unused-vars': 'error',
        'vue/no-use-computed-property-like-method': 'error',
        'vue/no-use-v-if-with-v-for': 'error',
        'vue/no-useless-template-attributes': 'error',
        'vue/no-v-text-v-html-on-component': 'error',
        'vue/require-prop-type-constructor': 'error',
        'vue/require-render-return': 'error',
        'vue/require-v-for-key': 'error',
        'vue/require-valid-default-prop': 'error',
        'vue/return-in-emits-validator': 'error',
        'vue/valid-attribute-name': 'error',
        'vue/valid-define-emits': 'error',
        'vue/valid-define-props': 'error',
        'vue/valid-next-tick': 'error',
        'vue/valid-template-root': 'error',
        'vue/valid-v-bind': 'error',
        'vue/valid-v-cloak': 'error',
        'vue/valid-v-else-if': 'error',
        'vue/valid-v-else': 'error',
        'vue/valid-v-for': 'error',
        'vue/valid-v-html': 'error',
        'vue/valid-v-if': 'error',
        'vue/valid-v-model': 'error',
        'vue/valid-v-on': 'error',
        'vue/valid-v-once': 'error',
        'vue/valid-v-pre': 'error',
        'vue/valid-v-show': 'error',
        'vue/valid-v-slot': 'error',
        'vue/valid-v-text': 'error',
        'vue/attributes-order': 'warn',
        'vue/component-tags-order': 'warn',
        'vue/no-lone-template': 'warn',
        'vue/no-multiple-slot-args': 'warn',
        'vue/this-in-template': 'warn',
        ...rules,
      },
    },
  ]
}
