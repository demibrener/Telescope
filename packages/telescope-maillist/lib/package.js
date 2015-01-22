Package.describe({
  summary: "emails",
  version: '0.1.0',
  name: "emails"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble', 'templating'], ['client']);

  api.use(['telescope-lib', 
    'telescope-base',
    'iron:router'], ['client','server']);


  api.use(['templating'], ['client']);


  api.addFiles(['lib/client/templates/emails.html',
    'lib/client/stylesheets/emails.css'
    ], ['client']);
  api.addFiles(['lib/clients/templates/emails.js',
    ], ['client', 'server']);

});
