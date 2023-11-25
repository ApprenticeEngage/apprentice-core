import { Test, TestingModule } from '@nestjs/testing';
import { CoursesLoController } from './courses-lo.controller';

describe('CoursesLoController', () => {
  let controller: CoursesLoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesLoController],
    }).compile();

    controller = module.get<CoursesLoController>(CoursesLoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
