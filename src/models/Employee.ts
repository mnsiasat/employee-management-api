import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ObjectType, Field, ID } from "type-graphql"

@Entity()
@ObjectType()
export class Employee extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => String)
  @Column()
  name!: string

  @Field(() => String)
  @Column()
  email!: string
}
