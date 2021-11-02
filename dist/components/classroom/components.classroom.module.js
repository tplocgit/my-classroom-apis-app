"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassroomsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const components_classroom_service_1 = require("./components.classroom.service");
const components_classroom_controller_1 = require("./components.classroom.controller");
const components_classroom_entity_1 = require("./components.classroom.entity");
let ClassroomsModule = class ClassroomsModule {
};
ClassroomsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([components_classroom_entity_1.Classroom])],
        providers: [components_classroom_service_1.ClassroomsService],
        controllers: [components_classroom_controller_1.ClassroomsController],
    })
], ClassroomsModule);
exports.ClassroomsModule = ClassroomsModule;
//# sourceMappingURL=components.classroom.module.js.map