import jsonwebtoken from 'jsonwebtoken';

import { UserModel } from '../schemas/user.schema.js';
import getError from '../lib/error.js';

export const getCurrentUser = async (req, res, next) => {
	const user = await UserModel.findById(req.user.id, { password: 0, __v: 0 });

	if(!user) return res.status(401).json({ message: 'Unauthorized' });

	res.status(200).json({ 
		message: 'User retrieved Successfully',
		user: user
	});
};

export const createUser = async (req, res, next) => {

	const user = new UserModel({
		username: req.body.username,
		password: req.body.password
	});

	user.save((err, dat) => {
		if(err) return res.status(500).json({ error: getError(err) });
		return res.status(201).json({ message: 'User created successfully', user: dat });
	});

};

export const login = async (req, res, next) => {
	
};

export const logout = async (req, res, next) => {
	res.clearCookie('authorization');
	res.status(200).json({ message: 'Logged out' });
};
