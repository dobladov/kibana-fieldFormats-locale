module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'kibana-fieldformats-locale',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      fieldFormats: ['plugins/kibana-fieldformats-locale/countries', 'plugins/kibana-fieldformats-locale/languages']
    }
  });
};
