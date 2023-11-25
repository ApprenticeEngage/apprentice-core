import { Test, TestingModule } from '@nestjs/testing';
import { CourseScheduleController } from './course-schedule.controller';

describe('CourseScheduleController', () => {
  let controller: CourseScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseScheduleController],
    }).compile();

    controller = module.get<CourseScheduleController>(CourseScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
