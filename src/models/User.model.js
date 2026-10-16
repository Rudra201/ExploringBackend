import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema({

username:{
   required:true,
   type:String,
   unique:true,
   lowercase:true,
   trim:true,
   index:true
},

email:{
   required:true,
   type:String,
   unique:true,
   lowercase:true,
   trim:true,
   index:true
},

fullname:{
   required:true,
   type:String,
   trim:true,
   index:true
},

Avatar:{
   required:true,
   type:String,//
  },

CoverImage:{

    type:String,
},

watchHistory:[
{
    type:Schema.Types.ObjectId,
    ref:'Video'
}
],

password:{

    type:String,
    required: [true,"Password is Require"]},


refreshToken:{
    type:String
}



},{timestamps:true});


userSchema.pre("save" , async function(next){
 if(!this.isModified("password")) return next();

 this.password = await bcrypt.hash(this.password, 10);
 next();
})


userSchema.methods.isPasswordCorrect = async function name(password) {
    
    return await bcrypt.compare(password , this.password)
    
}
userSchema.methods.generateAccessToken = function(){

  return  jwt.sign({

        id:this._id,
        username:this.username,
        fullname:this.fullname,
        email:this.email
    }
,
process.env.ACCESS_TOKEN_SECRET,
{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
})

}

userSchema.methods.generateRefreshToken = function(){
    
 return  jwt.sign({

        id:this._id,
        
    }
,
process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
})


}

export const User = mongoose.model("User" , userSchema)
