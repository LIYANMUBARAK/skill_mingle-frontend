import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'orderStatus'
})

export class OrderStatus implements PipeTransform{
    transform(value: boolean) {
       if(value){
       const status = "completed"
       return status
       }
        else{
             const status= "pending"
             return status
        }
      
}
}