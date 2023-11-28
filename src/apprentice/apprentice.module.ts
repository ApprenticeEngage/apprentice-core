import { Module } from '@nestjs/common';
import { ApprenticeService } from './service/service.service';
import { ApprenticeController } from './controller/controller.controller';

@Module({
  providers: [ApprenticeService],
  controllers: [ApprenticeController],
})
export class ApprenticeModule {}
