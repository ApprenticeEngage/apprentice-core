import { Test, TestingModule } from '@nestjs/testing';
import { ApprenticeCoursesController } from './apprentice-courses.controller';

describe('ApprenticeCoursesController', () => {
  let controller: ApprenticeCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApprenticeCoursesController],
    }).compile();

    controller = module.get<ApprenticeCoursesController>(ApprenticeCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
