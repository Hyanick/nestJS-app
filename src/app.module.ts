import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produit/produit.module';

@Module({
  imports: [ProduitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
