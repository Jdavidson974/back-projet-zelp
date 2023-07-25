import { Module, OnModuleInit } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements OnModuleInit {
  constructor(private userService: UsersService) { }
  onModuleInit() {
    this.userService.count().then(
      haveUser => {
        if (!haveUser) {
          console.log("création des user");
          this.userService.createInitUser()
          this.userService.createInitAdmin();
        }
      }
    )

  }

}
