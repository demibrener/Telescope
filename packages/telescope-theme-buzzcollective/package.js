Package.describe({
  summary: "Telescope buzzcollective theme",
  version: '0.1.0',
  name: "telescope-theme-buzzcollective"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
    ], ['client']);

});