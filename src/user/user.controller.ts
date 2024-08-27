import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { promises } from 'dns';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

 @Get(':id')
 async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
  }
