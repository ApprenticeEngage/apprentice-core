import { Injectable } from '@nestjs/common';
import { Curriculum } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CurriculumService {
  constructor(private readonly dataBase: DatabaseService) {}

  //both mentor and apprentice can invoke this
  async findAll(currID: number) {
    return this.dataBase.curriculum.findMany({
      where: {
        curr_id: currID,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(curr: Curriculum) {
    return this.dataBase.curriculum.create({ data: curr });
  }

  async remove(currId: number) {
    try {
      return await this.dataBase.curriculum.delete({
        where: {
          curr_id: currId,
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove currId: ${error.message}`);
    }
  }

  async update(currId: number, curr: Curriculum) {
    return this.dataBase.curriculum.update({
      where: {
        curr_id: currId,
      },
      data: curr,
    });
  }
}
