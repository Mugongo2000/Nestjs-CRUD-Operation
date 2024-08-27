import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './User/user.module';
import { User } from './User/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ben@2024&',
      database: 'nestjs',
      entities: [User],
      synchronize: true, // Automatically syncs the database schema, use only in development
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
