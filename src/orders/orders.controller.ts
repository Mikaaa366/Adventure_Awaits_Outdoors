import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async getAll() {
    return this.ordersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = await this.ordersService.getById(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  @Post()
  async create(@Body() orderData: CreateOrderDTO) {
    return this.ordersService.create(orderData);
  }
}
