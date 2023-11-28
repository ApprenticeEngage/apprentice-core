import { Injectable } from '@nestjs/common';
import { Section } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SectionService {
  constructor(private readonly dataBase: DatabaseService) {}

  //both mentor and apprentice can invoke this

  //the where clause should intake curr_id_section_id ; theres an err
  async findAll(currId: number) {
    return this.dataBase.section.findMany({
      where: {
        curr_id: currId,
      },
    });
  }

  async findOne(currId: number, secId: number) {
    return this.dataBase.section.findMany({
      where: {
        curr_id: currId,
        section_id: secId,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(curr: Section) {
    return this.dataBase.section.create({ data: curr });
  }

  async remove(secId: number, currId: number) {
    try {
      return await this.dataBase.section.delete({
        where: {
          curr_id_section_id: {
            curr_id: currId,
            section_id: secId,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove secId: ${error.message}`);
    }
  }

  async update(secId: number, currId: number, curr: Section) {
    return this.dataBase.section.update({
      where: {
        curr_id_section_id: {
          curr_id: currId,
          section_id: secId,
        },
      },
      data: curr,
    });
  }
}
