Package.describe({
  summary: "Telescope buzzcollective theme",
  version: '0.1.0',
  name: "telescope-theme-buzzcollective"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

  api.use(['telescope-lib', 
    'telescope-base'], ['client','server']);


  api.use(['templating'], ['client']);

  api.addFiles(['lib/buzzcollective.js',
    ], ['client', 'server']);

  api.addFiles(['lib/client/stylesheets/screen.scss',
    'lib/client/templates/buzzcollective_banner.html',
    'lib/client/stylesheets/buzzcollective_banner.css'
    ], ['client']);

});