import { Test, TestingModule } from '@nestjs/testing';
import { CoursesLoService } from './courses-lo.service';

describe('CoursesLoService', () => {
  let service: CoursesLoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesLoService],
    }).compile();

    service = module.get<CoursesLoService>(CoursesLoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
