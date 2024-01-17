import { DataSource } from 'typeorm';
import { User } from './user.entity';
import {AuthService} from '../auth/auth.service'
export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];