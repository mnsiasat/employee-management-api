import { InputType, Field } from 'type-graphql'
import { Column } from 'typeorm'

@InputType()
export class CreateEmployeeInput {

  @Field(() => String)
  fullName!: string

  @Field(() => String)
  email!: string

}