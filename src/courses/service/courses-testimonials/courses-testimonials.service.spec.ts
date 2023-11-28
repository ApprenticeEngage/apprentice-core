import { Test, TestingModule } from '@nestjs/testing';
import { CoursesTestimonialsService } from './courses-testimonials.service';

describe('CoursesTestimonialsService', () => {
  let service: CoursesTestimonialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesTestimonialsService],
    }).compile();

    service = module.get<CoursesTestimonialsService>(CoursesTestimonialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
