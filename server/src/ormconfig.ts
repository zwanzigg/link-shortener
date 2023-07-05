import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import { Link } from "./links/link.entity";

export const ORMConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "db",
  port: 3306,
  username: "root",
  password: "root",
  database: "bitly",
  entities: [Link],
  synchronize: true,
};
