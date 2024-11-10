export interface UseCase<Request, Response> {
	execute(request: Request, service?: any): Promise<Response>;
}
