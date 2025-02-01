import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class TodoDto {
  @ApiProperty({ example: 1 }) // Swagger のドキュメントに反映
  @IsNumber()
  id: number

  @ApiProperty({ example: 'Buy groceries' })
  @IsString()
  task: string

  @ApiProperty({ example: false })
  @IsBoolean()
  completed: boolean
}
