import { IsUrl } from "class-validator";

export class CreateLinkDto {
  @IsUrl()
  redirect_url: string;
}
