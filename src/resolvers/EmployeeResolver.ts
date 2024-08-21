import { Employee } from '../models/Employee'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  async employees() {
    return Employee.find()
  }

  @Mutation(() => Employee)
  async createEmployee(@Arg('name') name: string, @Arg('email') email: string) {
    const employee = Employee.create({ name, email })
    await employee.save()
    return employee
  }
}
