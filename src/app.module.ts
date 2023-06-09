import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';

@Module({
  imports:  [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './items.sqlite',
      synchronize: true,
      autoLoadEntities: true,
    }), 
    ItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
