import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
@ObjectType()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  firstname: string;

  @Field()
  @Column()
  lastname: string;

  @Field()
  @Column()
  password: string;
}
