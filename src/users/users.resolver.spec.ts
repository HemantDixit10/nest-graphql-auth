import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  const mockUserService = {
    findAll: jest.fn(),

    findOne: jest.fn((name) => {
      return {
        name,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUserService)
      .compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should be get a user', () => {
    expect(resolver.findAll());
  });

  it('should be get a user', () => {
    const name = 'test';
    expect(resolver.findOne(name));

    expect(mockUserService.findOne).toHaveBeenCalledWith(name);
  });
});
