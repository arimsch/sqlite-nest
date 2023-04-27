import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from 'src/entity/item.entity';
import { Repository } from 'typeorm';

@Controller('items')
export class ItemsController {
    @InjectRepository(ItemEntity)
    protected readonly entitiesRepository: Repository<ItemEntity>;

    @Get()
    async getAll(): Promise<ItemEntity[]> {
        return this.entitiesRepository.find();
    }
}