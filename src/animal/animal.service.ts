import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Animal, AnimalDocument } from './schemas/animal.schema';
import { Model } from 'mongoose';
import { CreateAnimalDto } from './dto/create-animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel(Animal.name)
    private readonly animalModel: Model<AnimalDocument>,
  ) {}

  create(createAnimalDto: CreateAnimalDto) {
    return this.animalModel.create(createAnimalDto);
  }
}
