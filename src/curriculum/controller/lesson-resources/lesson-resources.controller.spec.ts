import { Test, TestingModule } from '@nestjs/testing';
import { LessonResourcesController } from './lesson-resources.controller';

describe('LessonResourcesController', () => {
  let controller: LessonResourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonResourcesController],
    }).compile();

    controller = module.get<LessonResourcesController>(LessonResourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
