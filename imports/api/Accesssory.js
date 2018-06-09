import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Accessory = new Mongo.Collection('acceessory');

if(Meteor.isServer){
    Meteor.publish('accessorypublish', function(){
        return Accessory.find({});
    });

    Meteor.methods({
        'addNewAccessory': function(accessoryName, accessoryType, accessoryPrice){
            var accessVal = Accessory.insert({
                                accessoryName   : accessoryName,
                                accessoryType   : accessoryType, 
                                accessoryPrice  : accessoryPrice,
                                createdAt       : new Date(),
                            });
            return accessVal;
        },
        'addNewAccessory': function(id, accessoryName, accessoryType, accessoryPrice){
            var accessVal = Accessory.update(
                            {'_id':id},
                            {
                                $set: {
                                    accessoryName   : accessoryName,
                                    accessoryType   : accessoryType, 
                                    accessoryPrice  : accessoryPrice,
                                }
                            });
                            
            return accessVal;
        },
        'deteteAccessory': function(id){
            Accessory.remove({'_id':id});
            return id;
        }
    });
}
