import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '/imports/api/Accessory.js';
import '/imports/api/Guitar.js';
import '/imports/api/Strap.js';

Meteor.startup(() => {
  
});

Meteor.methods({
    addGuitarUserRole(){
        var userId = Meteor.userId();
        Roles.addUsersToRoles(userId, 'user');
        return true;
    }
})
