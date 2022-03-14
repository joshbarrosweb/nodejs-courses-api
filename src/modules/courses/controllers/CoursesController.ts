import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';

import CreateCourseService from '../services/CreateCourseService';
import ListCourseService from '../services/ListCourseService';
import ShowCourseService from '../services/ShowCourseService';

export default class CoursesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCourse = new ListCourseService();

    const courses = await listCourse.execute();

    return response.json(instanceToInstance(courses));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, requires } = request.body;

    const createCourse = new CreateCourseService();

    const course = await createCourse.execute({
      name,
      requires,
    });

    return response.json(instanceToInstance(course));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.body;
    const showCourse = new ShowCourseService();

    const course = await showCourse.execute({ course_id });

    return response.json(instanceToInstance(course));
  }
}
