import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Link } from "./link.entity";
import { CreateLinkDto } from "./dto/create-link.dto";
import { UpdateLinkDto } from "./dto/update-link.dto";
import { UpdateResult } from "typeorm/query-builder/result/UpdateResult";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private readonly linksRepository: Repository<Link>,
  ) {}

  public async getLinks(): Promise<Link[]> {
    return this.linksRepository.find();
  }

  public async createLink(link: CreateLinkDto): Promise<Link> {
    const guid = uuidv4();
    return this.linksRepository.save({
      redirect_url: link.redirect_url,
      shortcode_guid: guid,
      active: true,
    });
  }

  public async getLink(guid: Link["shortcode_guid"]): Promise<Link> {
    const foundLink = await this.linksRepository.findOne({
      where: [{ shortcode_guid: guid }],
    });
    if (!foundLink) {
      throw new HttpException("Link not found", HttpStatus.NOT_FOUND);
    }
    return foundLink;
  }

  public async updateLink(
    shortcode_guid: Link["shortcode_guid"],
    updateData: UpdateLinkDto,
  ): Promise<UpdateResult> {
    return this.linksRepository.update({ shortcode_guid }, updateData);
  }

  public async deleteLink(guid: Link["shortcode_guid"]) {
    return this.linksRepository.delete({ shortcode_guid: guid });
  }
}
