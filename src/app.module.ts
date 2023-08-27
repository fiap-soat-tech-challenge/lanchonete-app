import { Module } from '@nestjs/common';
import { RestModule } from './infra/apis/rest/rest.module';

@Module({
  imports: [RestModule],
  providers: [],
})
export class AppModule {}
