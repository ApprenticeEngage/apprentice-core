import { Test, TestingModule } from '@nestjs/testing';
import { CoursesAnnouncementsService } from './courses-announcements.service';

describe('CoursesAnnouncementsService', () => {
  let service: CoursesAnnouncementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesAnnouncementsService],
    }).compile();

    service = module.get<CoursesAnnouncementsService>(CoursesAnnouncementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
