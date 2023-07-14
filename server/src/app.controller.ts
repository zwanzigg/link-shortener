import { Controller, Get, Param, Request, Res } from "@nestjs/common";
import { LinksService } from "./links/links.service";
import {
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("redirect")
@Controller()
export class AppController {
  constructor(private service: LinksService) {}

  @ApiParam({
    name: "guid",
    description: "The GUID of the link to be redirected to",
    type: String,
    required: true,
  })
  @ApiOperation({
    summary: "Redirect to a link",
    description: "Redirect to a link",
  })
  @Get("redirect/:guid")
  public async get(@Param() params, @Request() req: Request, @Res() res: any) {
    const url = await this.service.getLink(params.guid);
    return res.redirect(url.redirect_url);
  }

  @ApiParam({
    name: "guid",
    description: "The GUID of the link to be redirected to",
    type: String,
    required: true,
  })
  @ApiOperation({
    summary: "Get redirect link",
    description: "Get redirect link",
  })
  @ApiOkResponse({
    status: 200,
    description: "The redirect link",
    schema: {
      example: {
        redirect_url: "https://google.com",
      },
    },
  })
  @Get(":guid")
  public async getRedirectLink(@Param() params, @Request() req: Request) {
    const { redirect_url } = await this.service.getLink(params.guid);
    return { redirect_url };
  }
}
