import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class GlobalGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('#3. Global guards');
        return true;
    }
}

export class ControllerGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('#4. Controller guards');
        return true;
    }
}

export class RouteGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('#5. Route guards');
        return true;
    }
}