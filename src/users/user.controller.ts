import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from './schemas/user.schema';
import { UsersService } from "./users.service";


@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UsersService
    ) {
    }

    @Post()
    create(@Body() userDto: CreateUserDto): Promise<User>{
        return this.userService.createUser(userDto);
    }

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

}

