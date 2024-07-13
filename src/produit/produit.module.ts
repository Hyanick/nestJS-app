import { Module } from '@nestjs/common';
import { ProduitsService } from './produit.service';
import { ProduitsController } from './produit.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ProduitsService],
  controllers: [ProduitsController],
})
export class ProduitsModule {}
