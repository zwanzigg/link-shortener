import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { LinksService } from "./links.service";
import { CreateLinkDto } from "./dto/create-link.dto";
import { UpdateLinkDto } from "./dto/update-link.dto";

@Controller("api/v1/codes")
export class LinksController {
  constructor(private service: LinksService) {}

  @Post()
  create(@Body() link: CreateLinkDto) {
    return this.service.createLink(link);
  }

  @Get()
  getAll() {
    return this.service.getLinks();
  }

  @Patch(":guid")
  update(@Param() params, @Body() dataToUpdate: UpdateLinkDto) {
    return this.service.updateLink(params.guid, dataToUpdate);
  }

  @Delete(":guid")
  deleteLink(@Param() params) {
    return this.service.deleteLink(params.guid);
  }
}
