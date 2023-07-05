import { Module } from "@nestjs/common";
import { LinksModule } from "./links/links.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ORMConfig } from "./ormconfig";
import { LinksController } from "./links/links.controller";
import { AppController } from "./app.controller";

@Module({
  imports: [TypeOrmModule.forRoot(ORMConfig), LinksModule],
  controllers: [LinksController, AppController],
})
export class AppModule {}
