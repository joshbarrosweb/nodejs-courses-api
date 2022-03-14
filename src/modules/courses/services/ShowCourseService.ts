import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import Course from '../typeorm/entities/Course';
import CoursesRepository from '../typeorm/repositories/CoursesRepository';

interface IRequest {
  course_id: string;
}

class ShowCourseService {
  public async execute({ course_id }: IRequest): Promise<Course> {
    const coursesRepository = getCustomRepository(CoursesRepository);

    const course = await coursesRepository.findById(course_id);

    if (!course) {
      throw new AppError('Course not found.');
    }

    return course;
  }
}

export default ShowCourseService;
