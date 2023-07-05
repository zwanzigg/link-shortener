export interface LinkEntity {
  id: number;
  shortcode_guid: string;
  redirect_url: string;
  active: boolean;
}
export interface ApiError {
  message: string;
  details?: string;
}
