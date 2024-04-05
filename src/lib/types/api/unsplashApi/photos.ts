import { Nullable } from '../../helpers';

export type UnsplashUser = {
  bio: Nullable<string>;
  first_name: string;
  instagram_username: Nullable<string>;
  last_name: Nullable<string>;
  links: {
    followers: string;
    following: string;
    html: string;
    likes: string;
    photos: string;
    portfolio: string;
    self: string;
  };
  location: Nullable<string>;
  name: string;
  portfolio_url: Nullable<string>;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: Nullable<string>;
  updated_at: string;
  username: string;
};

type UnsplashResponse<T> = {
  total: number;
  total_pages: number;
  results: T[];
};

type PhotoResponse = {
  id: string;
  created_at: string;
  updated_at: string;
  alt_description: Nullable<string>;
  blur_hash: Nullable<string>;
  color: Nullable<string>;
  description: Nullable<string>;
  height: number;
  likes: number;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  promoted_at: Nullable<string>;
  width: number;
  user: UnsplashUser;
};

export type Photos = UnsplashResponse<PhotoResponse>;
