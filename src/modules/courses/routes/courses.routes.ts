import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CoursesController from '../controllers/CoursesController';

const coursesRouter = Router();

const coursesController = new CoursesController();

coursesRouter.get('/', coursesController.index);

coursesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),

  coursesController.show,
);

coursesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      requires: Joi.string().uuid().required(),
    },
  }),

  coursesController.create,
);

export default coursesRouter;
