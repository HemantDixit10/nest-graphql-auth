import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserInput } from './dto/login-user.input';
import { User } from '../entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput } from '../users/dto/create-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user) {
      const valid = await bcrypt.compare(password, user?.password);
      if (user && valid) {
        const { password, ...result } = user;
        return result;
      }
    } else {
      throw new Error('Invalid login detail');
    }
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user,
    };
  }

  async signUp(createUserInput: CreateUserInput) {
    const user = await this.usersService.findOne(createUserInput.username);
    if (user) {
      throw new Error('User already exist');
    }

    const password = await bcrypt.hash(createUserInput.password, 10);

    return this.usersService.create({
      ...createUserInput,
      password,
    });
  }
}
