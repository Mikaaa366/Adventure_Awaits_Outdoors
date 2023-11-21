import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(orderData: CreateOrderDTO): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
