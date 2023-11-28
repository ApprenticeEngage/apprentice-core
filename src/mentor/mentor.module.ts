import { Module } from '@nestjs/common';
import { MentorService } from './service/service.service';
import { MentorController } from './controller/controller.controller';

@Module({
  providers: [MentorService],
  controllers: [MentorController],
})
export class MentorModule {}
