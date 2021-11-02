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
exports.ClassroomsController = void 0;
const common_1 = require("@nestjs/common");
const components_classroom_service_1 = require("./components.classroom.service");
let ClassroomsController = class ClassroomsController {
    constructor(ClassroomsService) {
        this.ClassroomsService = ClassroomsService;
    }
    findAll() {
        return this.ClassroomsService.findAll();
    }
    findOne(params) {
        return this.ClassroomsService.findOne(params.id);
    }
    async create(name, theme, part) {
        if (!name || !theme || !part)
            return null;
        const weeksFromEpochTime = Math.floor(Date.now() / 60 / 60 / 24 / 7).toString();
        let numberOfRows = await this.ClassroomsService.countRows();
        numberOfRows = numberOfRows ? numberOfRows : 0;
        const id = (numberOfRows > 10 ? '' : '0') +
            (numberOfRows > 100 ? '' : '0') +
            numberOfRows.toString() +
            weeksFromEpochTime;
        return this.ClassroomsService.add(id, name, theme, part);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClassroomsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClassroomsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('theme')),
    __param(2, (0, common_1.Body)('part')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], ClassroomsController.prototype, "create", null);
ClassroomsController = __decorate([
    (0, common_1.Controller)('classrooms'),
    __metadata("design:paramtypes", [components_classroom_service_1.ClassroomsService])
], ClassroomsController);
exports.ClassroomsController = ClassroomsController;
//# sourceMappingURL=components.classroom.controller.js.map