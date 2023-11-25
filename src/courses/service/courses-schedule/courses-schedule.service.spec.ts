import { Test, TestingModule } from '@nestjs/testing';
import { CoursesScheduleService } from './courses-schedule.service';

describe('CoursesScheduleService', () => {
  let service: CoursesScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesScheduleService],
    }).compile();

    service = module.get<CoursesScheduleService>(CoursesScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
