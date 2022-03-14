import { getCustomRepository } from 'typeorm';

import Course from '../typeorm/entities/Course';
import CoursesRepository from '../typeorm/repositories/CoursesRepository';

class ListCourseService {
  public async execute(): Promise<Course[]> {
    const coursesRepository = getCustomRepository(CoursesRepository);

    const courses = coursesRepository.find();

    return courses;
  }
}

export default ListCourseService;
