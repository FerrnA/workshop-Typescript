import express, {Application, Request, Response, NextFunction} from 'express';
import config from './lib/config';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import routes from './routes/index';
import cors from 'cors';
const app: Application = express();
app.use(express.urlencoded({extended: true, limit: '50mb'})); //middleware
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

interface error {
	status: number;
	message: string;
}
app.use('/', routes);
app.use(
	cors({
		origin: config.cors,
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
	})
	);
/* const options: cors.CorsOptions = {
	allowedHeaders: ['Origin','X-Requested-With','Content-Type','Accept','X-Access-Token'],
	credentials: true,
	methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
	origin: config.cors,
	preflightContinue: false,
  }; */
//app.use(cors(options));
//app.options('*', cors<Request>(options));
app.use((err: error, req: Request, res: Response, next: NextFunction) => {
	// eslint-disable-line no-unused-vars
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send(message);
});

app.get('/', (req: Request, res: Response) => {
	res.send('hola typescript!');
});

export default app;