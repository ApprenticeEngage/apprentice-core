import { Injectable } from '@nestjs/common';
import { CoursePreReq } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CoursesPreReqService {
  constructor(private readonly dataBase: DatabaseService) {}

  //both mentor and apprentice can invoke this
  async findAll(courseId: number) {
    return this.dataBase.coursePreReq.findMany({
      where: {
        course_id: courseId,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(coursePreReq: CoursePreReq) {
    return this.dataBase.coursePreReq.create({ data: coursePreReq });
  }

  async remove(courseId: number, serialNo: number) {
    try {
      return await this.dataBase.coursePreReq.delete({
        where: {
          course_id_serialNo: {
            course_id: courseId,
            serialNo: serialNo,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove coursePreReq: ${error.message}`);
    }
  }

  async update(courseId: number, serialNo: number, coursePreReq: CoursePreReq) {
    return this.dataBase.coursePreReq.update({
      where: {
        course_id_serialNo: {
          course_id: courseId,
          serialNo: serialNo,
        },
      },
      data: coursePreReq,
    });
  }
}
