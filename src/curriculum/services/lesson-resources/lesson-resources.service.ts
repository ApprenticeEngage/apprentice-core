import { Injectable } from '@nestjs/common';
import { LessonResources } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LessonResourcesService {
  constructor(private readonly dataBase: DatabaseService) {}

  //the where clause should intake curr_id_section_id ; theres an err
  async findAll(currId: number, secId: number, lessonResources: number) {
    return this.dataBase.lessonResources.findMany({
      where: {
        curr_id: currId,
        section_id: secId,
        lesson_id: lessonResources,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(lessonResourcesRes: LessonResources) {
    return this.dataBase.lessonResources.create({ data: lessonResourcesRes });
  }

  async remove(
    secId: number,
    currId: number,
    lessonResources: number,
    serialNo: number,
  ) {
    try {
      return await this.dataBase.lessonResources.delete({
        where: {
          curr_id_section_id_lesson_id_serialNo: {
            section_id: secId,
            curr_id: currId,
            lesson_id: lessonResources,
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
    lessonId: number,
    serialNo: number,
    lessonResources: LessonResources,
  ) {
    return this.dataBase.lessonResources.update({
      where: {
        curr_id_section_id_lesson_id_serialNo: {
          section_id: secId,
          curr_id: currId,
          lesson_id: lessonId,
          serialNo: serialNo,
        },
      },
      data: lessonResources,
    });
  }
}
