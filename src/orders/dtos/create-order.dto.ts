import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  address: string;

  @IsNotEmpty()
  @IsString()
  @Length(7, 15)
  phone: string;
}
