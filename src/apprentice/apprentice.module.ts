import { Module } from '@nestjs/common';
import { ApprenticeService } from './service/service.service';
import { ApprenticeController } from './controller/controller.controller';
import { ApprenticeCertController } from './controller/apprentice-cert/apprentice-cert.controller';
import { ApprenticeCoursesController } from './controller/apprentice-courses/apprentice-courses.controller';
import { ApprenticeCoursesService } from './service/apprentice-courses/apprentice-courses.service';
import { ApprenticeCertService } from './service/apprentice-cert/apprentice-cert.service';

@Module({
  providers: [ApprenticeService, ApprenticeCoursesService, ApprenticeCertService],
  controllers: [ApprenticeController, ApprenticeCertController, ApprenticeCoursesController],
})
export class ApprenticeModule {}
