Package.describe({
  summary: "emails",
  version: '0.1.0',
  name: "emails"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble'], ['client']);

  api.use(['telescope-lib', 
    'telescope-base'], ['client','server']);


  api.use(['templating'], ['client']);


  api.addFiles(['lib/client/templates/emails.html',
    'lib/client/stylesheets/emails.css'
    ], ['client']);
  api.addFiles(['lib/emails.js',
    ], ['client', 'server']);

});
