import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';

describe('AuthService', () => {
  let service: AuthService;

  const mockAuthService = {
    validateUser: jest.fn((user) => user),
    login: jest.fn((user) => user),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, JwtService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should validate a user', async () => {
    const dto = {
      username: 'test',
      password: 'test',
    };
    expect(await service.validateUser(dto.username, dto.password)).toEqual(
      dto.username,
    );
  });

  it('should a login', async () => {
    const user = {
      first_name: 'test',
      last_name: 'test',
      username: 'test',
      password: 'test',
      id: 1,
    };
    const dto = {
      access_token: 'stringtest',
      ...user,
    };
    expect(await service.login(dto)).toEqual(dto);
  });
});
