import { Test, TestingModule } from '@nestjs/testing';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { CreateUserInput } from '../users/dto/create-user.input';
import { User } from '../entities/user.entity';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  const mockAuthService = {
    signUp: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),

    login: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthResolver, AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockAuthService)
      .compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should create new user', () => {
    const dto = {
      first_name: 'test',
      last_name: 'test',
      username: 'test',
      password: 'test',
    };
    expect(resolver.signUp(dto)).toEqual({
      id: expect.any(Number),
      ...dto,
    });

    expect(mockAuthService.signUp).toHaveBeenCalledWith(dto);
  });

  it('should signin user', () => {
    const dto = {
      username: 'test',
      password: 'test',
    };
    const data = { user: dto };
    expect(resolver.login(dto, data)).toEqual({
      id: expect.any(Number),
      ...dto,
    });

    expect(mockAuthService.login).toHaveBeenCalledWith(dto);
  });
});
