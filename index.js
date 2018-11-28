module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'kibana-fieldformats-locale',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      fieldFormats: ['plugins/countries/countries', 'plugins/countries/languages']
    }
  });
};
