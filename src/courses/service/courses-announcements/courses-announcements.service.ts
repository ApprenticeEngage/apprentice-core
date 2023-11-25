import { Injectable } from '@nestjs/common';
import { CourseAnnouncements } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CourseService } from '../courses/service.service';

@Injectable()
export class CoursesAnnouncementsService {
  constructor(
    private readonly dataBase: DatabaseService,
    private readonly courseService: CourseService,
  ) {}

  //both mentor and apprentice can invoke this
  async findAll(courseId: number) {
    return this.dataBase.courseAnnouncements.findMany({
      where: {
        course_id: courseId,
      },
    });
  }

  //this privilege only resides with the mentor ; so setup auth as such
  async create(courseAnnouncements: CourseAnnouncements) {
    const courseId = courseAnnouncements.course_id;
    //meaning ; regardless of what the announcemetnNo is in the payload; announcementNO will be used to determine the announcementID for the course
    const announcementNo =
      await this.courseService.getAnnouncementCounter(courseId);
    console.log(announcementNo);
    await this.dataBase.courseAnnouncements.create({
      data: {
        course_id: courseId,
        announcement_id: announcementNo,
        announcement_desc: courseAnnouncements.announcement_desc,
      },
    });
    await this.courseService.updateAnnouncementCounter(courseId);
  }

  async remove(courseId: number, announcement_id: number) {
    try {
      return await this.dataBase.courseAnnouncements.delete({
        where: {
          course_id_announcement_id: {
            course_id: courseId,
            announcement_id: announcement_id,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to remove courseAnnouncements: ${error.message}`);
    }
  }

  async update(
    courseId: number,
    announcement_id: number,
    courseAnnouncements: CourseAnnouncements,
  ) {
    await this.dataBase.courseAnnouncements.update({
      where: {
        course_id_announcement_id: {
          course_id: courseId,
          announcement_id: announcement_id,
        },
      },
      data: courseAnnouncements,
    });
  }
}
