import { EntityRepository, Repository } from 'typeorm';
import Course from '../entities/Course';

@EntityRepository(Course)
class CoursesRepository extends Repository<Course> {
  public async findByName(name: string): Promise<Course | undefined> {
    const course = await this.findOne({
      where: {
        name,
      },
    });

    return course;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const course = await this.findOne({
      where: {
        id,
      },
    });

    return course;
  }
}

export default CoursesRepository;
