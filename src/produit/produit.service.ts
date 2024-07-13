import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class ProduitsService {
    constructor(private readonly httpService: HttpService) {}
    getAllProducts() {
        return this.httpService
          .get('http://localhost:8080/products')
          .pipe(map(response => response.data));
      }
}
