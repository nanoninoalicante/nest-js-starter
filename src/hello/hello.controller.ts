import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UseInterceptors,
} from "@nestjs/common";
import { HelloService } from "./hello.service";
import { ErrorsInterceptor } from "src/interceptors/exception.interceptor";
import { LoggingInterceptor } from "src/interceptors/logging.interceptor";
import { ResponseInterceptor } from "src/interceptors/response.interceptor";

@UseInterceptors(new LoggingInterceptor())
@UseInterceptors(new ResponseInterceptor())
@UseInterceptors(new ErrorsInterceptor())
@Controller("hello")
export class HelloController {
    constructor(protected service: HelloService) {}
    @Get("world")
    async getHello() {
        return this.service.getWorld();
    }
    @Post("world")
    async getHelloPost(@Body() body: any, @Query() queryParams: any) {
        return this.service.getWorld(body, queryParams);
    }
    @Post("world/:test")
    async getHelloPut(@Body() body: any, @Param() params: any) {
        return this.service.getWorld(body, params);
    }
}
