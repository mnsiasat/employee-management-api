import { InputType, Field, ID } from 'type-graphql'
import { Column, PrimaryGeneratedColumn } from 'typeorm'

@InputType()
export class UpdateEmployeeInput {

  @Field(() => ID)
  id!: number

  @Field({ nullable: true })
  fullName?: string

  @Field({ nullable: true })
  email?: string

}