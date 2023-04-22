import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    async getAllUsers() {
        return JSON.stringify({ test: 'Só um teste boy'}) // This is a test
    }
}
