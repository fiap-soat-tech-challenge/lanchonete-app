import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout.service';

@Module({
  providers: [CheckoutService],
  exports: [CheckoutService],
})
export class CheckoutModule {}
