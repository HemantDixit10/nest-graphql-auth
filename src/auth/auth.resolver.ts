import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login';
import { LoginUserInput } from './dto/login-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guard/gql-auth.gaurd';
import { User } from '../entities/user.entity';
import { CreateUserInput } from 'src/users/dto/create-user.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  signUp(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.authService.signUp(createUserInput);
  }
}
