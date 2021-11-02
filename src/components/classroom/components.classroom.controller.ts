import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ClassroomsService } from './components.classroom.service';

@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly ClassroomsService: ClassroomsService) {}

  @Get()
  findAll() {
    return this.ClassroomsService.findAll();
  }

  @Get('/:id')
  findOne(@Param() params) {
    return this.ClassroomsService.findOne(params.id);
  }

  @Post()
  async create(
    @Body('name') name: string,
    @Body('theme') theme: string,
    @Body('part') part: string,
  ) {
    if (!name || !theme || !part) return null;

    const weeksFromEpochTime = Math.floor(
      Date.now() / 60 / 60 / 24 / 7,
    ).toString();
    let numberOfRows = await this.ClassroomsService.countRows();
    numberOfRows = numberOfRows ? numberOfRows : 0;
    const id =
      (numberOfRows > 10 ? '' : '0') +
      (numberOfRows > 100 ? '' : '0') +
      numberOfRows.toString() +
      weeksFromEpochTime;
    return this.ClassroomsService.add(id, name, theme, part);
  }
}
