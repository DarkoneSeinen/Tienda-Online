import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AddToCartDto, UpdateCartItemDto } from './dto/cart.dto';
import { User } from '../auth/user.decorator';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  addToCart(@User('id') userId: number, @Body() dto: AddToCartDto) {
    return this.cartService.addToCart(userId, dto);
  }

  @Get()
  getCart(@User('id') userId: number) {
    return this.cartService.getCart(userId);
  }

  @Put(':itemId')
  updateCartItem(
    @User('id') userId: number,
    @Param('itemId') itemId: number,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartService.updateCartItem(userId, +itemId, dto);
  }

  @Delete(':itemId')
  removeFromCart(@User('id') userId: number, @Param('itemId') itemId: number) {
    return this.cartService.removeFromCart(userId, +itemId);
  }

  @Post('checkout')
  checkout(@User('id') userId: number) {
    return this.cartService.checkout(userId);
  }
}
