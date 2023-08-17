export interface User {
    _id:any;
    name:string,
    userName:string,
    email:string,
    password:string,
    mobileNumber:number,
    country:string,
    city:string,
    isBlocked:boolean,
    isFreelancer?:boolean,
    freelancerId?:string
    dateOfJoin?:Date
    profilePic?:string
}

export interface  UserInitail{
    user: User | null
}