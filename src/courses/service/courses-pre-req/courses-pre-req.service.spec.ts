import { Test, TestingModule } from '@nestjs/testing';
import { CoursesPreReqService } from './courses-pre-req.service';

describe('CoursesPreReqService', () => {
  let service: CoursesPreReqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesPreReqService],
    }).compile();

    service = module.get<CoursesPreReqService>(CoursesPreReqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
