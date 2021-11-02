"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const components_classroom_entity_1 = require("./components.classroom.entity");
let ClassroomsService = class ClassroomsService {
    constructor(classroomsRepository) {
        this.classroomsRepository = classroomsRepository;
    }
    async findAll() {
        return await this.classroomsRepository.find();
    }
    async findOne(id) {
        return await this.classroomsRepository.findOne(id);
    }
    async add(id, name, theme, part) {
        const newClassroom = new components_classroom_entity_1.Classroom();
        newClassroom.id = id;
        newClassroom.name = name;
        newClassroom.theme = theme;
        newClassroom.part = part;
        newClassroom.created_date = new Date().toUTCString();
        let isSaved;
        try {
            isSaved = await this.classroomsRepository.save(newClassroom);
        }
        catch (err) {
            console.log(err);
        }
        return !!isSaved;
    }
    async remove(id) {
        await this.classroomsRepository.delete(id);
    }
    async countRows() {
        const manager = (0, typeorm_2.getManager)();
        return await manager.count(components_classroom_entity_1.Classroom);
    }
};
ClassroomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(components_classroom_entity_1.Classroom)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClassroomsService);
exports.ClassroomsService = ClassroomsService;
//# sourceMappingURL=components.classroom.service.js.map