import { RegistryFieldFormatsProvider } from 'ui/registry/field_formats'
import countries from "i18n-iso-countries"

countries.registerLocale(require("i18n-iso-countries/langs/en.json"))

export function createCountriesFormat(FieldFormat) {

  const DEFAULT_LANGUAGE = 'en'
  const userLanguage = (navigator.language || navigator.userLanguage || DEFAULT_LANGUAGE)
    .split('-').shift()

  return class UUIDFormat extends FieldFormat {
    static id = 'countries'
    static title = 'Countries Labels'
    static fieldType = 'string'

    _convert(val) {
      return countries.getName(val, userLanguage || DEFAULT_LANGUAGE) || val
    }
  }
}

RegistryFieldFormatsProvider.register(createCountriesFormat)
