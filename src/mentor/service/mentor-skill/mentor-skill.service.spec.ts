import { Test, TestingModule } from '@nestjs/testing';
import { MentorSkillService } from './mentor-skill.service';

describe('MentorSkillService', () => {
  let service: MentorSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentorSkillService],
    }).compile();

    service = module.get<MentorSkillService>(MentorSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
