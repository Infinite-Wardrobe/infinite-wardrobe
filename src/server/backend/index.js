import logger from './lib/logger.js';

import './lib/dotenv.js'; // Allows for .env config to be accessed despite import hoisting.

import server from './app.js';

const PORT = process.env.port??80;

server.listen(PORT, () => {
	logger.info(`Server started, listening on port ${PORT}`);
});
