/* global __KBN__ */
import { RegistryFieldFormatsProvider } from 'ui/registry/field_formats'

export function createUUIDFormat(FieldFormat) {

  const { confURL } = __KBN__.vars;

  const DEFAULT_LANGUAGE = 'en'
  const userLanguage = (navigator.language || navigator.userLanguage || DEFAULT_LANGUAGE)
    .split('-').shift()
  const labels = []
  jQuery.ajax({
    url: confURL,
    success: result => labels.push.apply(labels, JSON.parse(result).results.bindings),
    async: false
  })

  return class UUIDFormat extends FieldFormat {
    static id = 'uuid'
    static title = 'UUID Labels'
    static fieldType = 'string'

    _convert(val) {
      const localizations = labels.filter(result => result.uri.value === val)
      const label = localizations.find(l => l.label['xml:lang'] === userLanguage)
        || localizations.find(l => l.label['xml:lang'] === DEFAULT_LANGUAGE)
        || localizations.shift()

      return label ? label.label.value : val
    }
  }
}

RegistryFieldFormatsProvider.register(createUUIDFormat)