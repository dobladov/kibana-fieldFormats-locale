import { RegistryFieldFormatsProvider } from 'ui/registry/field_formats'
import languages from 'languages'

export function createLanguagesFormat(FieldFormat) {

  return class UUIDFormat extends FieldFormat {
    static id = 'kibana-fieldformats-locale-languages'
    static title = 'Languages Labels'
    static fieldType = 'string'

    _convert(val) {
      return languages.getLanguageInfo(val).name || val
    }
  }
}

RegistryFieldFormatsProvider.register(createLanguagesFormat)
