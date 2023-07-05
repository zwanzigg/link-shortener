import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import { Link } from "./links/link.entity";

const NODE_ENV = process.env.NODE_ENV || "development";

export const ORMConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: NODE_ENV === "development" ? "localhost" : "db",
  port: 3306,
  username: "root",
  password: "root",
  database: "bitly",
  entities: [Link],
  synchronize: true,
};
