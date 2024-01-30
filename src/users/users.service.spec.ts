import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  const markUsersRepository = {
    save: jest
      .fn()
      .mockImplementation((user) =>
        Promise.resolve({ id: Date.now(), ...user }),
      ),

    findOne: jest.fn((user) => user),
    find: jest.fn().mockImplementation(() => Promise.resolve({})),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: markUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new user and return data', async () => {
    const dto = {
      first_name: 'test',
      last_name: 'test',
      username: 'test',
      password: 'test',
    };
    expect(await service.create(dto)).toEqual({
      id: expect.any(Number),
      first_name: dto.first_name,
      last_name: dto.last_name,
      username: dto.username,
      password: dto.password,
    });
  });

  it('should be get all users', () => {
    expect(service.findAll());
  });

  it('should be get a user', () => {
    const data = { username: 'test' };
    expect(service.findOne(data.username));
  });
});
