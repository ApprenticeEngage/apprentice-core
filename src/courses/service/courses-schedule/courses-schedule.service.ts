import { Injectable } from '@nestjs/common';
import { CourseSchedule } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CoursesScheduleService {
  constructor(private readonly dataBase: DatabaseService) {}

  //both mentor and apprentice can invoke this
  async findAll(courseId: number) {
    return this.dataBase.courseSchedule.findMany({
      where: {
        course_id: courseId,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(courseSchedule: CourseSchedule) {
    return this.dataBase.courseSchedule.create({ data: courseSchedule });
  }

  async remove(courseId: number) {
    try {
      return await this.dataBase.courseSchedule.delete({
        where: {
          course_id: courseId,
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove courseSchedule: ${error.message}`);
    }
  }

  async update(courseId: number, courseSchedule: CourseSchedule) {
    return this.dataBase.courseSchedule.update({
      where: {
        course_id: courseId,
      },
      data: courseSchedule,
    });
  }
}
