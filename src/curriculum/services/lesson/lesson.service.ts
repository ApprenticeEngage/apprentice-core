import { Injectable } from '@nestjs/common';
import { Lesson } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LessonService {
  constructor(private readonly dataBase: DatabaseService) {}

  //the where clause should intake curr_id_section_id ; theres an err
  async findAll(currId: number, secId: number) {
    return this.dataBase.lesson.findMany({
      where: {
        curr_id: currId,
        section_id: secId,
      },
    });
  }

  //the where clause should intake curr_id_section_id ; theres an err
  async findOne(currId: number, secId: number, lesson: number) {
    return this.dataBase.lesson.findFirst({
      where: {
        curr_id: currId,
        section_id: secId,
        lesson_id: lesson,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(lesson: Lesson) {
    return this.dataBase.lesson.create({ data: lesson });
  }

  async remove(secId: number, currId: number, lesson: number) {
    try {
      return await this.dataBase.lesson.delete({
        where: {
          curr_id_section_id_lesson_id: {
            section_id: secId,
            curr_id: currId,
            lesson_id: lesson,
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
    lesson: Lesson,
  ) {
    return this.dataBase.lesson.update({
      where: {
        curr_id_section_id_lesson_id: {
          section_id: secId,
          curr_id: currId,
          lesson_id: lessonId,
        },
      },
      data: lesson,
    });
  }
}
