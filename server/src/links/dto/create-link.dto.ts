import { IsUrl } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLinkDto {
  @ApiProperty({
    description: "The URL to shorten",
    type: String,
    required: true,
    example: "https://www.google.com",
  })
  @IsUrl()
  redirect_url: string;
}
