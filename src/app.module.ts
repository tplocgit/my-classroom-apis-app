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
      username: 'sql6448293',
      password: 'KcegnwHH3p',
      database: 'sql6448293',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClassroomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
