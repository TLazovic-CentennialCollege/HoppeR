let mongoose = require ('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
{
    username:
    {
        type:String,
        default:"",
        trim:true,
        require:"Username is required."
    },
    email:
    {
        type:String,
        default:"",
        trim:true,
        require:"Email address is required."
    },
    displayName:
    {
        type:String,
        default:"",
        trim:true,
        require:"Display name is required."
    }
},
{
    collection:'users'
}
)
//configure option for user model
let options = ({missingPasswordError:"Wring / Missing Password "});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User',User);