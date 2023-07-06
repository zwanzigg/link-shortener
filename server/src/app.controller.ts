import { Controller, Get, Param, Request, Res } from "@nestjs/common";
import { LinksService } from "./links/links.service";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";

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
  @Get(":guid")
  public async get(@Param() params, @Request() req: Request, @Res() res: any) {
    const url = await this.service.getLink(params.guid);
    res.redirect(url.redirect_url);
  }
}
