import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'orderStatus'
})

export class OrderStatus implements PipeTransform{
    transform(value: Boolean|boolean) {
       if(value===true){
       const status = "Completed"
       return status
       }
        else{
             const status= "Pending"
             return status
        }
      
}
}