import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
      ProductsModule,
      MongooseModule.forRoot('mongodb+srv://iakubenko:film123456789@cluster0.vfz5a.mongodb.net/filmService?retryWrites=true&w=majority'),
      UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
