Meteor.startup(function () {
  console.log("hola");
  Router.map(function() {
    this.route('emails', {
    	//name: 'emails',
    	path: '/emails'
    });
  });
  console.log("Hello client");
});
