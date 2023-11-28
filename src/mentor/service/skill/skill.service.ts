import { Injectable } from '@nestjs/common';
import { Skill } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SkillService {
  constructor(private readonly dataBase: DatabaseService) {}

  create(skill: Skill) {
    return this.dataBase.skill.create({ data: skill });
  }

  findOne(id: number) {
    return this.dataBase.skill.findMany({
      where: {
        id: id,
      },
    });
  }

  update(id: number, skill: Skill) {
    return this.dataBase.skill.update({
      where: {
        id: id,
      },
      data: skill,
    });
  }

  remove(id: number) {
    return this.dataBase.skill.delete({
      where: {
        id: id,
      },
    });
  }
}
