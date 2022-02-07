import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {
    }

    async createUser(dto: CreateUserDto): Promise<User> {
        return await this.userModel.create(dto);
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find().exec()
    }

    async getUserByEmail(email: string): Promise<User> {
        const user = await this.userModel.findOne({ email: email })
        return user;
    }
}
