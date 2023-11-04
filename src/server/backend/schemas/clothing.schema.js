import { Schema, model } from 'mongoose';

import { ImageSchema } from './image.schema.js';

export const ClothingSchema = Schema({
	category: {
		type: String,
		required: true
	},
	colour: {
		type: String,
		required: true
	},
	image: ImageSchema
	
}, {collection: 'clothing'}, {timestamps: true});

export const ClothingModel = model('Clothing', ClothingSchema);
