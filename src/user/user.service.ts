import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOne({where : {id}});
  }
  async update(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return await this.findOne(id);
  }
  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
