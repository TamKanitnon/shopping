import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
    private products: ProductDTO[] = [
        { name: 'Banana',description: 'ผลไม้กล้วยจันทบุรี',price: 40 },
        { name: 'Apple',description: 'ผลไม้เชียงใหม่',price: 20 },
        { name: 'Cherry',description: 'ผลไม้ลำพูล',price: 30 },
        { name: 'Pine Apple',description: 'ผลไม้สุโขทัย',price: 40 },
        { name: 'Mango',description: 'ผลไม้สกลนคร',price: 60 },
        { name: 'Mangoteen',description: 'ผลไม้อเมริกา',price: 40 },
        { name: 'Melon',description: 'ผลไม้อังกฤษ',price: 80 },
        { name: 'Water Melon',description: 'ผลไม้สวีเดน',price: 10 }
    ];

    findAll(): ProductDTO[] {
        return this.products;
    }

    findByCondition(predicate: (product: ProductDTO) => boolean) {
        return this.products.filter(prod => predicate(prod));
    }
}