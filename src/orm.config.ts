import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: '127.0.0.1',
  username: 'postgres',
  password: 'root',
  database: 'library',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
}
