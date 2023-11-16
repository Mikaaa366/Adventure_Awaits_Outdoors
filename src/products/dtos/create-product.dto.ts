import { IsNotEmpty, IsString, IsNumber, Length } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  mainImage: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 1000)
  description: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 400)
  shortDescription: string;
}
