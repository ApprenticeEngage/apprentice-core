import { Test, TestingModule } from '@nestjs/testing';
import { CourseAnnouncementsController } from './course-announcements.controller';

describe('CourseAnnouncementsController', () => {
  let controller: CourseAnnouncementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseAnnouncementsController],
    }).compile();

    controller = module.get<CourseAnnouncementsController>(CourseAnnouncementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
