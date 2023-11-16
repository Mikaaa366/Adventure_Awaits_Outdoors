import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {
    this.productsService = productsService;
  }

  @Get('/')
  getAll() {
    return this.productsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found');

    return product;
  }

  @Post('/')
  async create(@Body() productData: CreateProductDTO) {
    return this.productsService.create(productData);
  }

  @Put('/:id')
  async updateById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    const product = await this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found');

    await this.productsService.updateById(id, productData);
    return { success: true };
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.productsService.getById(id)))
      throw new NotFoundException('Product not found');

    await this.productsService.deleteById(id);
    return { success: true };
  }
}
