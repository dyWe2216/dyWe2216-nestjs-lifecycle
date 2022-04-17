import { BadRequestException, CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

export class GlobalInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('#6. Global interceptors (pre-request)');
        
        return next
            .handle()
            .pipe(
                tap(() => {
                    console.log('#17. Global interceptors (post-request)');
                    throw new BadRequestException('asd');
                }),
            );
    }
}

export class ControllerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('#7. Controller interceptors (pre-request)');

        return next
            .handle()
            .pipe(
                tap(() => console.log('#16. Controller interceptors (post-request)') ),
            );
    }
}

export class RouteInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('#8. Route interceptors (pre-request)');

        return next
            .handle()
            .pipe(
                tap(() => console.log('#15. Route interceptors (post-request)') ),
            );
    }
}
