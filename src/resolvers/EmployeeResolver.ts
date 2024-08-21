import { Employee } from '../models/Employee'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { CreateEmployeeInput } from '../input/CreateEmployeeInput'
import { UpdateEmployeeInput } from '../input/UpdateEmployeeInput'

@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee])
  async employees() {
    return Employee.find()
  }

  @Mutation(() => Employee)
  async createEmployee(@Arg('input') input: CreateEmployeeInput) {
    const { fullName, email } = input
    const employee = Employee.create({ fullName, email })
    await employee.save()
    return employee
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg('id') id: number) {
    const employee = await Employee.findOne({ where: { id } })
    if (!employee) throw new Error('Employee not found!')
    await employee.remove()
    return true
  }

  @Mutation(() => Employee)
  async updateEmployee(
    @Arg('input') input: UpdateEmployeeInput,
  ) {
    const employee = await Employee.findOne({ where: { id: input.id } })
    if (!employee) throw new Error('Employee not found!')
    if(input.email){
      employee.email = input.email
    }
    if(input.fullName){
      employee.fullName = input.fullName
    }
    await employee.save()
    return employee
  }
}
