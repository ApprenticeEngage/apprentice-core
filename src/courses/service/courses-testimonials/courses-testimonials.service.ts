import { Injectable } from '@nestjs/common';
import { CourseTestimonials } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CoursesTestimonialsService {
  constructor(private readonly dataBase: DatabaseService) {}

  //both mentor and apprentice can invoke this
  async findAllCourseTestimonials(courseId: number) {
    return this.dataBase.courseTestimonials.findMany({
      where: {
        course_id: courseId,
      },
    });
  }

  async findAllApprenticeTestimonials(apprenticeId: number) {
    return this.dataBase.courseTestimonials.findMany({
      where: {
        apprentice_id: apprenticeId,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(courseTestimonials: CourseTestimonials) {
    return this.dataBase.courseTestimonials.create({
      data: courseTestimonials,
    });
  }

  async remove(courseId: number, serialNo: number) {
    try {
      return await this.dataBase.courseTestimonials.delete({
        where: {
          course_id_serialNo: {
            course_id: courseId,
            serialNo: serialNo,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove courseTag: ${error.message}`);
    }
  }

  async update(
    courseId: number,
    serialNo: number,
    courseTestimonials: CourseTestimonials,
  ) {
    return this.dataBase.courseTestimonials.update({
      where: {
        course_id_serialNo: {
          course_id: courseId,
          serialNo: serialNo,
        },
      },
      data: courseTestimonials,
    });
  }
}
