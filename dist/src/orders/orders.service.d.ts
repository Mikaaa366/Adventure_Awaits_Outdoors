import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Order[]>;
    getById(id: Order['id']): Promise<Order | null>;
    create(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order>;
}
