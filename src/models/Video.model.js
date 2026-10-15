import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({

videoFile:{
    type:String,
    require:true,
    unique:true,

},

thumbnail:{
    type:String,
    require:true,
    unique:true
},

title:{
    type:String,
    require:true,
    unique:true,
},

description:{
    type:String,
    require:true,
    unique:true,
},


duration:{
    type:Number,
    require:true,
    unique:true,
},


views:{
    type:number,
    require:true,
    unique:true,
},


isPublished:{
    type:Boolean,
    require:true,
    unique:true,
},

owner:[
{
    type:Schema.Types.ObjectId,
    ref:'User'
}
],

})

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model('Video' , videoSchema);