import * as plugin from "tailwindcss/plugin"
import Config from "./types/config"

/**
 * @param {Config} config The config object: each key is a tw selector and each value is the corresponding css selector
 */
const attributesPlugin = (config: Config) =>
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

export default attributesPlugin
