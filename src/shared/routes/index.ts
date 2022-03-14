import { Router } from 'express';

import usersRouter from '@modules/users/routes/users.routes';
import coursesRouter from '@modules/courses/routes/courses.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/courses', coursesRouter);

export default routes;
