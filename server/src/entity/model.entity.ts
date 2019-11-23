import { File } from './file.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { POI } from './poi.entity';

@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    public id: string;

    // TODO: type me
    @Column()
    public obj3d: any;

    @OneToOne(() => File)
    public file: File;

    @OneToOne(() => POI)
    public poi: POI;
}