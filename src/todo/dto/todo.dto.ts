import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class TodoDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id!: number

  @ApiProperty({ example: 'Buy groceries' })
  @IsString()
  task!: string

  @ApiProperty({ example: false })
  @IsBoolean()
  completed!: boolean
}

