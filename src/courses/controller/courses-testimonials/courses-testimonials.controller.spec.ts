import { Test, TestingModule } from '@nestjs/testing';
import { CoursesTestimonialsController } from './courses-testimonials.controller';

describe('CoursesTestimonialsController', () => {
  let controller: CoursesTestimonialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesTestimonialsController],
    }).compile();

    controller = module.get<CoursesTestimonialsController>(CoursesTestimonialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
