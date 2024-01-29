import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  private readonly users = [];

  async create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
    };
    return await this.userRepo.save({ ...createUserInput });
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(username: string): Promise<User> {
    const data = await this.userRepo.findOne({ where: { username } });
    return data;
  }
}
