import { IsUrl } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateLinkDto {
  @ApiProperty({
    name: "redirect_url",
    description: "The URL to redirect to",
    type: String,
    required: true,
  })
  @IsUrl()
  redirect_url: string;
}
