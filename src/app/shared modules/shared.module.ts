
import { NgModule } from '@angular/core';
import { DueDate } from '../helpers/pipes/dueDate.pipe';
import { OrderStatus } from '../helpers/pipes/orderStatus.pipe';

@NgModule({
  declarations: [DueDate, OrderStatus],
  exports: [DueDate, OrderStatus],
})
export class SharedModule {}