import app from './app';
import { dbConnection, PORT } from './config';

(async () => {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
	await dbConnection.default();
})();
