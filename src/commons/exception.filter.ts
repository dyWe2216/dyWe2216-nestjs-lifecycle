import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";

export class GlobalExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse<Response>();
        const status = exception.getStatus();
        const error = exception.getResponse();

        console.log('#18. Exception filters (route, then controller, then global)');

        response
            .status(status)
            .json({
                statusCode: status,
                message: error['message'],
            });
    }
}