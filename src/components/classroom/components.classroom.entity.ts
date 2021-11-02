import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('classroom')
export class Classroom {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  theme: string;

  @Column()
  part: string;

  @Column()
  created_date: string;
}
