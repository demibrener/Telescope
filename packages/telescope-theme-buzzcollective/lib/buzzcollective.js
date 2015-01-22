	heroModules.push({
	  template: 'buzzcollectiveBanner'
	});

if(Meteor.isClient){
  Template.buzzcollectiveBanner.events({
    "click .buzzcollective-button": function(event, template){
      console.log(template);
      var email = template.find('.newsletter-email');
      console.log(email.value);
      Meteor.addToMailList(email.value);
      return false;
    }
  });
}
