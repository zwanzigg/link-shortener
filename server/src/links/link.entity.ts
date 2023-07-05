import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  shortcode_guid: string;

  @Column()
  redirect_url: string;

  @Column()
  active: boolean;
}
