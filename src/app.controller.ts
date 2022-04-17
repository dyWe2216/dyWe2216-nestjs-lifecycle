import { Controller, Get, Param, Query, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { GlobalDto } from './app.dto';
import { AppService } from './app.service';
import { ControllerGuard, RouteGuard } from './commons/guard';
import { ControllerInterceptor, RouteInterceptor } from './commons/interceptor';
import { ControllerPipe, GlobalPipe, RouteParameterPipe, RoutePipe } from './commons/pipe';

@UseGuards(ControllerGuard)
@UseInterceptors(ControllerInterceptor)
@Controller()
@UsePipes(new ControllerPipe)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(RouteGuard)
  @UseInterceptors(RouteInterceptor)
  @UsePipes(new RoutePipe)
  getHello(
    @Query(new RouteParameterPipe) query: GlobalDto,
  ): string {
    console.log('#13. Controller layer');
    return this.appService.getHello();
  }
}