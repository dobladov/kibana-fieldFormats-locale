module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'countries',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      fieldFormats: ['plugins/countries/countries', 'plugins/countries/languages']
    }
  });
};
