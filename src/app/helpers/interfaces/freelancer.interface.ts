export interface freelancer{
     _id:string
     userId:string
     name:string
     userName:string
     email:string
     password:string
     mobileNumber:number
     gender:string
     country:string
     city:string
     dateOfJoin:Date
     freelancerId:string
     isFreelancer:boolean
     languages:language[]
     skills:skill[]
     description:string
     certification:certifiaction[]
     education:[]

}

interface language{
     language:string,
     level:string
}

interface skill{
     skill:string,
     level:string
}

interface certifiaction{
     certificationName:string,
     certifiedFrom:string
     certifiedYear:string
}