import { IsUrl } from "class-validator";

export class UpdateLinkDto {
  @IsUrl()
  redirect_url: string;
}
