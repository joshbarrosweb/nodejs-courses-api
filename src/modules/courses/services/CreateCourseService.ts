// import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';

import Course from '../typeorm/entities/Course';
import CoursesRepository from '../typeorm/repositories/CoursesRepository';

interface IRequest {
  name: string;
  requires: string;
}

class CreateCourseService {
  public async execute({ name, requires }: IRequest): Promise<Course> {
    const coursesRepository = getCustomRepository(CoursesRepository);

    // if "required course" don't exist, need to implement a method to throw an error here!!!

    const course = coursesRepository.create({
      name,
      requires,
    });

    await coursesRepository.save(course);

    return course;
  }
}

export default CreateCourseService;
