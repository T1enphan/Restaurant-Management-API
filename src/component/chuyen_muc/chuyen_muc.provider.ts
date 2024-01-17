import { DataSource } from 'typeorm';
import { ChuyenMuc } from './chuyen_muc.entity';
export const chuyenmucProviders = [
  {
    provide: 'CHUYENMUC_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ChuyenMuc),
    inject: ['DATA_SOURCE'],
  },
];