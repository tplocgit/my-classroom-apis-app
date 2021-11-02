import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { Classroom } from './components.classroom.entity';

@Injectable()
export class ClassroomsService {
  constructor(
    @InjectRepository(Classroom)
    private readonly classroomsRepository: Repository<Classroom>,
  ) {}

  async findAll(): Promise<Classroom[]> {
    return await this.classroomsRepository.find();
  }

  async findOne(id: string): Promise<Classroom> {
    return await this.classroomsRepository.findOne(id);
  }

  async add(id: string, name: string, theme: string, part: string) {
    const newClassroom = new Classroom();
    newClassroom.id = id;
    newClassroom.name = name;
    newClassroom.theme = theme;
    newClassroom.part = part;
    newClassroom.created_date = new Date().toUTCString();
    let isSaved;
    try {
      isSaved = await this.classroomsRepository.save(newClassroom);
    } catch (err) {
      console.log(err);
    }
    return isSaved;
  }

  async remove(id: string): Promise<void> {
    await this.classroomsRepository.delete(id);
  }

  async countRows(): Promise<number> {
    const manager = getManager();
    return await manager.count(Classroom);
  }
}
