import { Global, Module } from "@nestjs/common";
import { MysqlService } from "./mysql.service";
import { MysqlController } from "./mysql.controller";
import { ConfigModule } from "@nestjs/config";

@Global()
@Module({
    imports: [ConfigModule],
    providers: [MysqlService],
    controllers: [MysqlController],
})
export class MysqlModule {}
