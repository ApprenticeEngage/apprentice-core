import { Module } from '@nestjs/common';
import { EnrollmentsController } from './controllers/enrollments/enrollments.controller';
import { EnrollmentsService } from './services/enrollments/enrollments.service';

@Module({
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService]
})
export class EnrollmentsModule {}
