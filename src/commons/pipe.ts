import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class GlobalPipe implements PipeTransform {
    /**
     * 
     * @param value 현재 실행중인 메서드 인자
     * @param metadata 현재 실행중인 메서드 인자의 metadata
     * @returns 
     */
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('#9. Global pipes');
    }
}

export class ControllerPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('#10. Controller pipes');
    }
}

export class RoutePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('#11. Route pipes');
    }
}

export class RouteParameterPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('#12. Route parameter pipes');
    }
}