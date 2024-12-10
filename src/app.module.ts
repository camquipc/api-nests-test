import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  DevtoolsModule.register({
    http: process.env.NODE_ENV !== 'production',
    port:8001
  }),
  TypeOrmModule.forRoot({ ...DataSourceConfig }),
  UsersModule,
  ProjectsModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
