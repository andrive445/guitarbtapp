import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  
});

Meteor.methods({
    addGuitarUserRole(){
        var userId = Meteor.userId();
        Roles.addUsersToRoles(userId, 'user');
        return true;
    }
})
