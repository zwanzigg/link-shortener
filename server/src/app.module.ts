import { Module } from "@nestjs/common";
import { LinksModule } from "./links/links.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ORMConfig } from "./ormconfig";
import { LinksController } from "./links/links.controller";
import { AppController } from "./app.controller";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    TypeOrmModule.forRoot(ORMConfig),
    LinksModule,

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../..", "client/public"),
    }),
  ],
  controllers: [LinksController, AppController],
})
export class AppModule {}
