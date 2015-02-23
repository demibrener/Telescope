MailListSchema = new SimpleSchema({
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email,
    max: 200
  },
  date: {
    type: Date,
    label: "Date",
    optional: true
  },
  username: {
    type: String,
    label: "Username",
    optional: true
  }
});

MailList = new Mongo.Collection('maillist');
MailList.attachSchema(MailListSchema);

MailList.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.addToMailList = function(email){
  MailList.insert({email:email, date:Date.now()});
  Router.go('atSignUp')
  document.getElementsByClassName('newsletter-banner')[0].style.display = 'none';
  
}

Meteor.getMails = function(){
  return MailList.find({});
}
