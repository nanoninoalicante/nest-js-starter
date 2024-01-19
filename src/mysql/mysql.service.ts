import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MysqlService {
    constructor(protected config: ConfigService) {}
}
