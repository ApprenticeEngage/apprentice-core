import { Injectable } from '@nestjs/common';
import { Courses } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CourseService {
  constructor(private readonly dataBase: DatabaseService) {}

  //this privilege only resides with the mentor ; so setup auth as such
  async create(courseObj: Courses) {
    return this.dataBase.courses.create({ data: courseObj });
  }

  //user should be invoking this api endpoint
  async findAll() {
    const courses = await this.dataBase.courses.findMany();
    return courses;
  }

  //both mentor and apprentice can invoke this
  async findOne(courseId: number) {
    return this.dataBase.courses.findFirst({
      where: {
        course_id: courseId,
      },
    });
  }

  update(courseId: number, courseObj: Courses) {
    return this.dataBase.courses.update({
      where: {
        course_id: courseId,
      },
      data: courseObj,
    });
  }

  async remove(courseId: number) {
    return await this.dataBase.courses.delete({
      where: {
        course_id: courseId,
      },
    });
  }

  async updateAnnouncementCounter(course_id: number) {
    const course = await this.dataBase.courses.update({
      where: {
        course_id: course_id,
      },
      data: {
        announcementsNo: { increment: 1 },
      },
    });
    console.log(`ann id has been increased to ${course.announcementsNo}`);
  }
  async getAnnouncementCounter(course_id: number) {
    const course = await this.dataBase.courses.findFirst({
      where: {
        course_id: course_id,
      },
    });
    if (course.announcementsNo == null) {
      const updatedCourse = await this.dataBase.courses.update({
        where: {
          course_id: course_id,
        },
        data: {
          announcementsNo: 0,
        },
      });
      console.log(`updateCourse ${updatedCourse.announcementsNo}`);
      return updatedCourse.announcementsNo;
    }
    return course.announcementsNo;
  }
}
