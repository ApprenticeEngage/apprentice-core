import { Injectable } from '@nestjs/common';
import { SectionLO } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SectionLoService {
  constructor(private readonly dataBase: DatabaseService) {}

  //both mentor and apprentice can invoke this

  //the where clause should intake curr_id_section_id ; theres an err
  async findAll(currId: number, secId: number) {
    const res = await this.dataBase.sectionLO.findFirst({
      where: {
        curr_id: currId,
        section_id: secId,
      },
    });
    return res.lo;
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(sectionLo: SectionLO) {
    return this.dataBase.sectionLO.create({ data: sectionLo });
  }

  async remove(secId: number, currId: number, serialNo: number) {
    try {
      return await this.dataBase.sectionLO.delete({
        where: {
          curr_id_section_id_serialNo: {
            section_id: secId,
            curr_id: currId,
            serialNo: serialNo,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove secId: ${error.message}`);
    }
  }

  async update(
    secId: number,
    currId: number,
    sectionLo: SectionLO,
    serialNo: number,
  ) {
    return this.dataBase.sectionLO.update({
      where: {
        curr_id_section_id_serialNo: {
          section_id: secId,
          curr_id: currId,
          serialNo: serialNo,
        },
      },
      data: sectionLo,
    });
  }
}
