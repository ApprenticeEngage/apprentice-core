import { Injectable } from '@nestjs/common';
import { CourseLO } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CoursesLoService {
  constructor(private readonly dataBase: DatabaseService) {}

  //both mentor and apprentice can invoke this
  async findAll(courseId: number) {
    return this.dataBase.courseLO.findMany({
      where: {
        course_id: courseId,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(courseLO: CourseLO) {
    return this.dataBase.courseLO.create({ data: courseLO });
  }

  async remove(courseId: number, serialNo: number) {
    try {
      return await this.dataBase.courseLO.delete({
        where: {
          course_id_serialNo: {
            course_id: courseId,
            serialNo: serialNo,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove CourseLO: ${error.message}`);
    }
  }

  async update(courseId: number, serialNo: number, courseLO: CourseLO) {
    return this.dataBase.courseLO.update({
      where: {
        course_id_serialNo: {
          course_id: courseId,
          serialNo: serialNo,
        },
      },
      data: courseLO,
    });
  }
}
