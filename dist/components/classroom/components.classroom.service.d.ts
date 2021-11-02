import { Repository } from 'typeorm';
import { Classroom } from './components.classroom.entity';
export declare class ClassroomsService {
    private readonly classroomsRepository;
    constructor(classroomsRepository: Repository<Classroom>);
    findAll(): Promise<Classroom[]>;
    findOne(id: string): Promise<Classroom>;
    add(id: string, name: string, theme: string, part: string): Promise<boolean>;
    remove(id: string): Promise<void>;
    countRows(): Promise<number>;
}
