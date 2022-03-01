import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('PATIENTS')
export class PatientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { name: 'name', length: 150})
  name: string;
  
  @Column('varchar', { name: 'surname', length: 150})
  surname: string;
  
  @Column('varchar', { name: 'phone', length: 100})
  phone: string;

  @Column('varchar', { name: 'email', length: 150})
  email: string;
  
  @Column("integer", { name: 'age'})
  age: number;
  
  @Column('varchar', { name: 'address', length: 255, nullable: true})
  address: string;
  
  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;
  
  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: Date;

  @Column('varchar', { name: 'insurance_id', default: null, nullable: true})
  insuranceId: string;
}
