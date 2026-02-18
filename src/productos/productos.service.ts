import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto, ProductoDocument } from './schemas/producto.schema';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name)
    private productoModel: Model<ProductoDocument>,
  ) {}

  async crear(data: any) {
    const nuevoProducto = new this.productoModel(data);
    return nuevoProducto.save();
  }

  async listar() {
    return this.productoModel.find();
  }
}