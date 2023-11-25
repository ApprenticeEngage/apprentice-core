import { Test, TestingModule } from '@nestjs/testing';
import { CoursePreReqController } from './course-pre-req.controller';

describe('CoursePreReqController', () => {
  let controller: CoursePreReqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursePreReqController],
    }).compile();

    controller = module.get<CoursePreReqController>(CoursePreReqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
