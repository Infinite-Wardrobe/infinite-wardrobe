import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


import ApiRouter from './routes/api.route.js';

import LoggerMiddleware from './middlewares/logger.middleware.js';
import MethodMiddleware from './middlewares/methods.middleware.js';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());

app.use(cors());

app.use(LoggerMiddleware);
app.use(MethodMiddleware);

app.use('/api/', ApiRouter);


app.use((req, res, next) => {
	res.setHeader('X-Powered-By', 'Consumerism and Capitalism');
	res.setHeader('X-Author', 'Fast Fashion');
	next();
});

export default app;
