import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { Ville } from 'src/ville/entities/ville.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Ville) private villeRepo: Repository<Ville>
  ) { }
  createInitAdmin() {
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

  createAndLogin(newUser: RegisterDto) {
    return this.villeRepo.findOneByOrFail({ id: +newUser.ville }).then(
      ville => {
        return bcrypt.genSalt().then(
          salt => {
            return bcrypt.hash(newUser.password, salt).then(
              hash => {
                const user: User = this.userRepo.create({ ...newUser, ville: ville, password: hash });
                return this.userRepo.save(user)
              }
            )
          }
        );
      }
    )
  }

  createInitUser() {
    const users: any[] = [
      {
        id: 1,
        email: "testa@gmail.com",
        firstname: "test",
        lastname: "test",
        password: "test",
        role: "client",
      },
      {
        id: 2,
        email: "testz@gmail.com",
        firstname: "test",
        lastname: "test",
        password: "test",
        role: "client",
      },
      {
        id: 3,
        email: "testb@gmail.com",
        firstname: "test",
        lastname: "test",
        password: "test",
        role: "restaurateur",
      },
      {
        id: 4,
        email: "testc@gmail.com",
        firstname: "test",
        lastname: "test",
        password: "test",
        role: "restaurateur",
      },
    ]
    this.userRepo.save(users)
  }

  findAll() {
    return `This action returns all users`;
  }

  findAllRestaurateur() {
    return this.userRepo.find({
      where: {
        role: 'restaurateur',
      },
    })
  }
  findAllClient() {
    return this.userRepo.find({
      where: {
        role: 'client',
      },
    })
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
