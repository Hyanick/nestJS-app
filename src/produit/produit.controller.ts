import { Controller, Get } from '@nestjs/common';
import { ProduitsService } from './produit.service';

@Controller()
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}
  @Get('produits')
  getAllProducts() {
    return this.produitsService.getAllProducts();
  }
}
