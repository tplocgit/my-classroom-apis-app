import { ClassroomsModule } from './components/classroom/components.classroom.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql6.freemysqlhosting.net',
      username: 'sql6454024',
      password: 'RpCgLcYqVK',
      database: 'sql6454024',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClassroomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
