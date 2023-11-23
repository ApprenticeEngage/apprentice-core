-- CreateTable
CREATE TABLE "Mentor" (
    "mentor_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" email_address NOT NULL,
    "phone" phone_number NOT NULL,
    "cnic" cnic_number NOT NULL,
    "rating" rating_value NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("mentor_id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MentorSkill" (
    "mentor_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,

    CONSTRAINT "MentorSkill_pkey" PRIMARY KEY ("mentor_id","skill_id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "course_id" TEXT NOT NULL,
    "mentor_id" TEXT NOT NULL,
    "difficulty_level" difficulty_level NOT NULL,
    "rating" rating_value NOT NULL,
    "curriculum_id" INTEGER NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "CourseTag" (
    "id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "CourseTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseTestimonials" (
    "id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "testimonial" TEXT NOT NULL,
    "apprentice_id" TEXT NOT NULL,

    CONSTRAINT "CourseTestimonials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseAnnouncements" (
    "announcement_id" INTEGER NOT NULL,
    "course_id" TEXT NOT NULL,
    "announcment_desc" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseAnnouncements_pkey" PRIMARY KEY ("course_id","announcement_id")
);

-- CreateTable
CREATE TABLE "CourseLO" (
    "id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "lo" TEXT NOT NULL,

    CONSTRAINT "CourseLO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursePreReq" (
    "id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "preReq" TEXT NOT NULL,

    CONSTRAINT "CoursePreReq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseSchedule" (
    "id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "weekday" weekday NOT NULL,
    "starttime" TIMESTAMP(3) NOT NULL,
    "endtime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curriculum" (
    "curr_id" SERIAL NOT NULL,

    CONSTRAINT "Curriculum_pkey" PRIMARY KEY ("curr_id")
);

-- CreateTable
CREATE TABLE "Section" (
    "curr_id" INTEGER NOT NULL,
    "section_id" INTEGER NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("curr_id","section_id")
);

-- CreateTable
CREATE TABLE "SectionLO" (
    "id" TEXT NOT NULL,
    "lo" TEXT NOT NULL,
    "section_id" INTEGER NOT NULL,
    "curr_id" INTEGER NOT NULL,

    CONSTRAINT "SectionLO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "curr_id" INTEGER NOT NULL,
    "section_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "uri" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("curr_id","section_id","lesson_id")
);

-- CreateTable
CREATE TABLE "LessonResources" (
    "id" TEXT NOT NULL,
    "section_id" INTEGER NOT NULL,
    "curr_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "uri" TEXT NOT NULL,

    CONSTRAINT "LessonResources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "curr_id" INTEGER NOT NULL,
    "section_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "uri" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("curr_id","section_id","lesson_id")
);

-- CreateTable
CREATE TABLE "Enrollments" (
    "course_id" TEXT NOT NULL,
    "apprentice_id" TEXT NOT NULL,

    CONSTRAINT "Enrollments_pkey" PRIMARY KEY ("course_id","apprentice_id")
);

-- CreateTable
CREATE TABLE "Apprentice" (
    "apprentice_id" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone" phone_number NOT NULL,
    "age" INTEGER NOT NULL,
    "institution" TEXT NOT NULL,
    "cnic" cnic_number,
    "guardian_name" TEXT,
    "guardian_cnic" cnic_number,
    "guardian_phone" phone_number,

    CONSTRAINT "Apprentice_pkey" PRIMARY KEY ("apprentice_id")
);

-- CreateTable
CREATE TABLE "ApprenticeCourses" (
    "course_id" TEXT NOT NULL,
    "apprentice_id" TEXT NOT NULL,
    "completed" BOOLEAN,
    "current_chapter_id" INTEGER NOT NULL,
    "current_section_id" INTEGER NOT NULL,
    "current_curr_id" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),

    CONSTRAINT "ApprenticeCourses_pkey" PRIMARY KEY ("course_id","apprentice_id")
);

-- CreateTable
CREATE TABLE "ApprenticeCert" (
    "course_id" TEXT NOT NULL,
    "apprentice_id" TEXT NOT NULL,
    "uri" TEXT,

    CONSTRAINT "ApprenticeCert_pkey" PRIMARY KEY ("course_id","apprentice_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_skill_key" ON "Skill"("skill");

-- CreateIndex
CREATE UNIQUE INDEX "Courses_curriculum_id_key" ON "Courses"("curriculum_id");

-- CreateIndex
CREATE UNIQUE INDEX "CourseSchedule_course_id_key" ON "CourseSchedule"("course_id");

-- AddForeignKey
ALTER TABLE "MentorSkill" ADD CONSTRAINT "MentorSkill_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "Mentor"("mentor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorSkill" ADD CONSTRAINT "MentorSkill_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_mentor_id_fkey" FOREIGN KEY ("mentor_id") REFERENCES "Mentor"("mentor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_curriculum_id_fkey" FOREIGN KEY ("curriculum_id") REFERENCES "Curriculum"("curr_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTag" ADD CONSTRAINT "CourseTag_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTestimonials" ADD CONSTRAINT "CourseTestimonials_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseTestimonials" ADD CONSTRAINT "CourseTestimonials_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseAnnouncements" ADD CONSTRAINT "CourseAnnouncements_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseLO" ADD CONSTRAINT "CourseLO_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursePreReq" ADD CONSTRAINT "CoursePreReq_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseSchedule" ADD CONSTRAINT "CourseSchedule_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_curr_id_fkey" FOREIGN KEY ("curr_id") REFERENCES "Curriculum"("curr_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionLO" ADD CONSTRAINT "SectionLO_section_id_curr_id_fkey" FOREIGN KEY ("section_id", "curr_id") REFERENCES "Section"("section_id", "curr_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_section_id_curr_id_fkey" FOREIGN KEY ("section_id", "curr_id") REFERENCES "Section"("section_id", "curr_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonResources" ADD CONSTRAINT "LessonResources_section_id_curr_id_lesson_id_fkey" FOREIGN KEY ("section_id", "curr_id", "lesson_id") REFERENCES "Lesson"("section_id", "curr_id", "lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_section_id_curr_id_fkey" FOREIGN KEY ("section_id", "curr_id") REFERENCES "Section"("section_id", "curr_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollments" ADD CONSTRAINT "Enrollments_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollments" ADD CONSTRAINT "Enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeCourses" ADD CONSTRAINT "ApprenticeCourses_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeCourses" ADD CONSTRAINT "ApprenticeCourses_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeCourses" ADD CONSTRAINT "ApprenticeCourses_current_chapter_id_current_curr_id_curre_fkey" FOREIGN KEY ("current_chapter_id", "current_curr_id", "current_section_id") REFERENCES "Lesson"("section_id", "curr_id", "lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeCert" ADD CONSTRAINT "ApprenticeCert_apprentice_id_fkey" FOREIGN KEY ("apprentice_id") REFERENCES "Apprentice"("apprentice_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprenticeCert" ADD CONSTRAINT "ApprenticeCert_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;
