import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { RolesController } from './roles/roles.controller';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
      ProductsModule,
      MongooseModule.forRoot('mongodb+srv://iakubenko:film123456789@cluster0.vfz5a.mongodb.net/filmService?retryWrites=true&w=majority'),
      UsersModule,
      AuthModule
  ],
  controllers: [AppController, RolesController],
  providers: [AppService],
})
export class AppModule {}
