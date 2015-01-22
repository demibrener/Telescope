Meteor.startup(function () {
  Router.map(function() {
    this.route('emails', {
      path: '/emails',
      template: getTemplate('emails')
    });
  });
});