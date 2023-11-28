import { Test, TestingModule } from '@nestjs/testing';
import { ApprenticeCoursesService } from './apprentice-courses.service';

describe('ApprenticeCoursesService', () => {
  let service: ApprenticeCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApprenticeCoursesService],
    }).compile();

    service = module.get<ApprenticeCoursesService>(ApprenticeCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
