import { Controller, Get, Res, UseInterceptors } from "@nestjs/common";
import { AppService } from "./app.service";
import { ErrorsInterceptor } from "./interceptors/exception.interceptor";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";
import { ResponseInterceptor } from "./interceptors/response.interceptor";
@UseInterceptors(new LoggingInterceptor())
@UseInterceptors(new ResponseInterceptor())
@UseInterceptors(new ErrorsInterceptor())
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    async getHtml(@Res() res: any) {
        const htmlString = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
    `;
        res.set("Content-Type", "text/html; charset=utf-8");
        return res.send(htmlString);
    }
}
