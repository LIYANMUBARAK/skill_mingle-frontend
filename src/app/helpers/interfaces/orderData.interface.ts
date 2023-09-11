import { freelancer } from "./freelancer.interface";
import { gig } from "./gig.interface";
import { user } from "./user.interface";

export interface Order{
    _id:string,
    completed:Boolean,
    date:Date,
    freelancer:freelancer,
    user:user,
    gigId:gig,
    orderToken:string,
    revisionCount:number,
    plan:string,
    price:string,
    deliveryTime:string,
    revision:string

}