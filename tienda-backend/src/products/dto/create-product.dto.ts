import { Product } from '../../../generated/prisma/index';

export type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;