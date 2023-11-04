import { Router } from 'express';

import AuthRouter from './auth.route.js';

const router = Router();

router.use('auth', AuthRouter);

router.get('/teapot', (req, res, next) => res.status(418).json({ message: 'I\'m a teapot' }));

export default Router;
