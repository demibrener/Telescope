if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    email: [
     db.maillist.find()
    ]
  });
}