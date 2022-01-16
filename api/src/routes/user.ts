import {Response, Request, Router, NextFunction} from 'express';
import {User} from '../models/User';

interface error {
	status: number;
	message: string;
}

const router = Router();
router.get('/', (req: Request, res: Response, next: NextFunction) => {
	User.findAll()
		.then((users) => {
			res.status(200).send(users);
		})
		.catch((error: error) => next(error));
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
	const user = req.body;
	User.create(user)
		.then((createdUser) => {
			res.send(createdUser);
		})
		.catch((error: error) => next(error));
});

export default router;