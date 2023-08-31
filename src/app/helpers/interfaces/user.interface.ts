
export interface user{

    _id: string,
    name: string,
    userName: string,
    email: string,
    password: string,
    mobileNumber: number,
    country: string,
    city: string,
    dateOfJoin:Date,
    freelancerId?:string,
    isBlocked:boolean,
    isFreelancer?:boolean,
    

    // ...
  }
  