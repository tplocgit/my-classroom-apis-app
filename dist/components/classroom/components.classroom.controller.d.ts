import { ClassroomsService } from './components.classroom.service';
export declare class ClassroomsController {
    private readonly ClassroomsService;
    constructor(ClassroomsService: ClassroomsService);
    findAll(): Promise<import("./components.classroom.entity").Classroom[]>;
    findOne(params: any): Promise<import("./components.classroom.entity").Classroom>;
    create(name: string, theme: string, part: string): Promise<boolean>;
}
