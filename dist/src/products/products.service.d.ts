import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Product[]>;
    getById(id: Product['id']): Promise<Product> | null;
    create(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
    updateById(id: Product['id'], productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product>;
    deleteById(id: Product['id']): Promise<Product>;
}
