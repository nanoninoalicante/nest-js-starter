import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class MysqlService {
    constructor(protected config: ConfigService) { }
    async putUser() {
        const user = await prisma.user.upsert({
            where: {
              email: 'cjameshill@gmail.com',
            },
            update: {
              name: 'Chris Hill',
            },
            create: {
              email: 'cjameshill@gmail.com',
              name: 'Chris Hill',
            },
          });
        return user;
    }
    async getUsers() {
        return await prisma.user.findMany();
    }
}
