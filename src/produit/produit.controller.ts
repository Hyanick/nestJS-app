import { Controller, Get } from '@nestjs/common';
import { ProduitsService } from './produit.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('produits')
@Controller()
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}
  @Get('produits')
  @ApiOperation({ summary: 'Get all produits' })
  @ApiResponse({ status: 200, description: 'Return all produits.' })
  getAllProducts() {
    return this.produitsService.getAllProducts();
  }
}
