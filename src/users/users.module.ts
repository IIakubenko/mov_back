import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user.controller';

@Module({
    providers: [UsersService],
    controllers: [UserController],
    imports: [MongooseModule.forFeature([
        { name: User.name, schema: UserSchema }
    ])],
    exports: [UsersService]
})
export class UsersModule {
}
