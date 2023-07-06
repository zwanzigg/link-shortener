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
import { ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import {
  CreateLinkResponse,
  DeleteLinkResponse,
  GetLinksResponse,
  UpdateLinkResponse,
} from "./responses";

@ApiTags("links")
@Controller("api/v1/codes")
export class LinksController {
  constructor(private service: LinksService) {}

  @ApiOkResponse({
    description: "Create link",
    schema: {
      example: CreateLinkResponse,
    },
  })
  @Post()
  create(@Body() link: CreateLinkDto) {
    return this.service.createLink(link);
  }

  @ApiOkResponse({
    description: "Get all links",
    schema: {
      example: GetLinksResponse,
    },
  })
  @Get()
  getAll() {
    return this.service.getLinks();
  }

  @ApiOkResponse({
    description: "Update link",
    schema: {
      example: UpdateLinkResponse,
    },
  })
  @ApiParam({
    name: "guid",
    description: "The GUID of the link to retrieve",
    type: String,
    required: true,
  })
  @Patch(":guid")
  update(@Param() params, @Body() dataToUpdate: UpdateLinkDto) {
    return this.service.updateLink(params.guid, dataToUpdate);
  }

  @ApiOkResponse({
    description: "Delete link",
    schema: {
      example: DeleteLinkResponse,
    },
  })
  @ApiParam({
    name: "guid",
    description: "The GUID of the link to delete",
    type: String,
    required: true,
  })
  @Delete(":guid")
  deleteLink(@Param() params) {
    return this.service.deleteLink(params.guid);
  }
}
