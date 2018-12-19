module.exports = function (kibana) {
  return new kibana.Plugin({
    id: 'kfl',
    name: 'kibana-fieldformats-locale',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      fieldFormats: [
        'plugins/kfl/countries',
        'plugins/kfl/languages',
        'plugins/kfl/uuids'
      ],
      injectDefaultVars(server) {
        const config = server.config();
        return {
          confURL: config.get('kfl.confURL')
        };
      }
    },
    config: (Joi) => {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        confURL: Joi.string(),
      });
    }
  });
};
