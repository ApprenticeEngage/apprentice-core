import { Injectable } from '@nestjs/common';
import { MentorSkill } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MentorSkillService {
  constructor(private readonly dataBase: DatabaseService) {}

  create(skill: MentorSkill) {
    return this.dataBase.mentorSkill.create({ data: skill });
  }

  async findOne(id: number, skillId: number) {
    return this.dataBase.mentorSkill.findFirst({
      where: {
        mentor_id: id,
        skill_id: skillId,
      },
    });
  }

  update(id: number, skillId: number, skill: MentorSkill) {
    return this.dataBase.mentorSkill.update({
      where: {
        mentor_id_skill_id: {
          mentor_id: id,
          skill_id: skillId,
        },
      },
      data: skill,
    });
  }

  remove(id: number, skillId: number) {
    return this.dataBase.mentorSkill.delete({
      where: {
        mentor_id_skill_id: {
          mentor_id: id,
          skill_id: skillId,
        },
      },
    });
  }
}
