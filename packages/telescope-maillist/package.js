Package.describe({
  summary: "emails",
  version: '0.1.0',
  name: "telescope-maillist"
});

Package.onUse(function (api) {

  api.use(['fourseven:scss', 'telescope-theme-hubble', 'templating'], ['client']);

  api.use(['telescope-lib', 
    'telescope-base',
    'iron:router'], ['client','server']);


  api.use(['templating'], ['client']);

  api.add_files([
    'lib/routes.js',
  ], ['client', 'server']);

  api.add_files(['lib/client/templates/emails.html',
    'lib/client/stylesheets/emails.css'
    ], ['client']);
  api.add_files(['lib/client/templates/emails.js',
    ], ['client', 'server']);

});
