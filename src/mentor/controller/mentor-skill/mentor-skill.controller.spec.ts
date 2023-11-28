import { Test, TestingModule } from '@nestjs/testing';
import { MentorSkillController } from './mentor-skill.controller';

describe('MentorSkillController', () => {
  let controller: MentorSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentorSkillController],
    }).compile();

    controller = module.get<MentorSkillController>(MentorSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
