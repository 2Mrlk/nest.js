import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService], // Permite que o AuthModule use este serviço
})
export class UsersModule {}