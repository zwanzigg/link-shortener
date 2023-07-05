import { Controller, Get, Param, Request, Res } from "@nestjs/common";
import { LinksService } from "./links/links.service";

@Controller()
export class AppController {
  constructor(private service: LinksService) {}

  @Get(":guid")
  public async get(@Param() params, @Request() req: Request, @Res() res: any) {
    const url = await this.service.getLink(params.guid);
    res.redirect(url.redirect_url);
  }
}
