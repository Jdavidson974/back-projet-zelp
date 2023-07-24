import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) { }
  createInitUser() {
    const email: string = 'jd9743101@gmail.com';
    const password: string = 'Sautronjd974@';
    return bcrypt.genSalt().then(
      salt => {
        return bcrypt.hash(password, salt).then(
          hash => {
            const user: User = this.userRepo.create({ email: email, password: hash, lastname: "SAUTRON", firstname: "Jean Davidson", role: "admin" });
            return this.userRepo.save(user);
          }
        )
      }
    );
  }
  count(): Promise<boolean> {
    return this.userRepo.find().then(
      user => {
        if (user.length) {
          return true;
        } else {
          return false
        }
      }
    )
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  findOnebyEmail(email: string) {
    return this.userRepo.findOneBy({ email: email })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
