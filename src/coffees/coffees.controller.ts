import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'It working well great';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return id;
  }
  @Post()
  create(@Body() body) {
    return body;
  }
}
