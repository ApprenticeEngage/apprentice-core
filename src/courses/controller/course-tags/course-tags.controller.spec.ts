import { Test, TestingModule } from '@nestjs/testing';
import { CourseTagsController } from './course-tags.controller';

describe('CourseTagsController', () => {
  let controller: CourseTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseTagsController],
    }).compile();

    controller = module.get<CourseTagsController>(CourseTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
