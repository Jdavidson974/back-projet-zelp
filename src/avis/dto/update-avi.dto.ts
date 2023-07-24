import { PartialType } from '@nestjs/mapped-types';
import { CreateAviDto } from './create-avi.dto';

export class UpdateAviDto extends PartialType(CreateAviDto) {}
