import plugin = require("tailwindcss/plugin")
import { Config } from "./types"

/**
 * @param {Config} config The config object: each key is a tw selector and each value is the corresponding css selector
 */
export = (config: Config) =>
  plugin(
    ({
      addVariant,
      e,
    }: {
      addVariant: (name: string, p: any) => void
      e: (className: string) => string
    }) =>
      Object.entries(config).forEach(([className, selector]) =>
        addVariant(className, ({ modifySelectors, separator }: any) =>
          modifySelectors(
            ({ className: inferredClassName }: any) =>
              `.${e(`${className}${separator}${inferredClassName}`)}${
                typeof selector === "string"
                  ? `[${selector}]`
                  : `[${selector[0]}${selector[1]}"${selector[2]}"]`
              }`
          )
        )
      )
  )
