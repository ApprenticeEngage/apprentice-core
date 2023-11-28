import { Module } from '@nestjs/common';
import { ApprenticeService } from './service/service.service';
import { ApprenticeController } from './controller/controller.controller';
import { ApprenticeCertController } from './controller/apprentice-cert/apprentice-cert.controller';
import { ApprenticeStatsController } from './controller/apprentice-stats/apprentice-courses.controller';
import { ApprenticeStatsService } from './service/apprentice-stats/apprentice-courses.service';
import { ApprenticeCertService } from './service/apprentice-cert/apprentice-cert.service';

@Module({
  providers: [ApprenticeService, ApprenticeStatsService, ApprenticeCertService],
  controllers: [
    ApprenticeController,
    ApprenticeCertController,
    ApprenticeStatsController,
  ],
})
export class ApprenticeModule {}
