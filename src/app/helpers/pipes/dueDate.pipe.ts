import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'dueDate'
})
export class DueDate implements PipeTransform{
    transform(value: any) {
        const orderDate = value[0]
        const deliveryTime = value[1]
      

          // Parse the given date string into a Date object
  const date = new Date(orderDate);

  // Add n days to the date
  date.setDate(date.getDate() + Number(deliveryTime));

  // Convert the updated Date object back to a string
  const updatedDateString = date.toISOString();

  return updatedDateString;
       
    }
}