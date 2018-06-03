import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  
});

// Meteor.methods({
//   createNewUser(userName, userEmail, userAddress, userCity, userState, userZip, userPassword1){
//     Accounts.createUser({
//       username: userEmail,
//       email:    userEmail,
//       password: userPassword1,
//       profile: {
//         name: userName,
//         address: userAddress,
//         city: userCity,
//         state: userState,
//         zip: userZip
//       }
//     }, (error, result)=> {
//       console.log('result: ', result);
//       if (error) {
//         console.log("Cannot create user");
//       }
//        if(result){
//           Meteor.users.update({"_id": result}, {$set:{'emails.0.verified': true}});
//           Roles.addUsersToRoles(result, "user");
//         }
     
//     });
//     return true;

//   }
// })
