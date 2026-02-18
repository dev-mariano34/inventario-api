import { Controller, Post, Get, Body } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  crear(@Body() body: any) {
    return this.productosService.crear(body);
  }

  @Get()
  listar() {
    return this.productosService.listar();
  }
}