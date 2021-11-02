import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomsService } from './components.classroom.service';
import { ClassroomsController } from './components.classroom.controller';
import { Classroom } from './components.classroom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Classroom])],
  providers: [ClassroomsService],
  controllers: [ClassroomsController],
})
export class ClassroomsModule {}
