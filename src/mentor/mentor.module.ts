import { Module } from '@nestjs/common';
import { MentorService } from './service/service.service';
import { MentorController } from './controller/controller.controller';
import { SkillController } from './controller/skill/skill.controller';
import { MentorSkillController } from './controller/mentor-skill/mentor-skill.controller';
import { SkillService } from './service/skill/skill.service';
import { MentorSkillService } from './service/mentor-skill/mentor-skill.service';

@Module({
  providers: [MentorService, SkillService, MentorSkillService],
  controllers: [MentorController, SkillController, MentorSkillController],
})
export class MentorModule {}
