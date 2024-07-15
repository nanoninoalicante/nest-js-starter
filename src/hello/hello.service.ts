import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class HelloService {
    constructor(protected config: ConfigService) {}
    async getWorld(body: any = {}, params: any = {}) {
        const envExample = this.config.get<string>("ENV_EXAMPLE");
        return {
            message: "world! Updated on MIG",
            ...body,
            ...params,
            envExample,
        };
    }
    async getWorldError() {
        try {
            throw new Error("testing error response");
        } catch (error) {
            throw error;
        }
    }
    async sendTestRequest(url: string, data: any) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return { url, data, response: await response.json() };
    }
}
