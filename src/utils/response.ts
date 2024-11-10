import { Response } from 'express';
import { GenericObject, StatusCode } from '../types';

function response(res: Response, data: GenericObject | any | undefined, status: StatusCode, type?: string): void {
	res.status(status).json({
		success: true ? status < 400 : false,
		result: status < 400 ? data : undefined,
		error: status >= 400 ? data : undefined,
		statusCode: status >= 400 ? status : undefined,
		type: status >= 400 ? type : undefined
	});
}

export { response };
