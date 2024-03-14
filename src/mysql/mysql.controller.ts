import { Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { ErrorsInterceptor } from "src/interceptors/exception.interceptor";
import { LoggingInterceptor } from "src/interceptors/logging.interceptor";
import { ResponseInterceptor } from "src/interceptors/response.interceptor";
import { MysqlService } from "./mysql.service";
@UseInterceptors(new LoggingInterceptor())
@UseInterceptors(new ResponseInterceptor())
@UseInterceptors(new ErrorsInterceptor())
@Controller("mysql")
export class MysqlController {
    constructor(protected service: MysqlService) { }
    @Post("users")
    async putUser() {
        return this.service.putUser();
    }
    @Get("users")
    async getUsers() {
        return this.service.getUsers();
    }
}
