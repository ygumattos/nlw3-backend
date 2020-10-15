import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  /**
   * OneToMany
   *  1st param: Tipo de retorno
   *  2nd param: Qual o campo que retorna o relacionamento inverso
   *  (Nesse caso que retorna o orphanato)
   */
  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update']
  })
  /**
   * JoinColumn
   * Qual o nome da coluna que armazena o relacionamento
   * de orfanato com images
   */
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];
}