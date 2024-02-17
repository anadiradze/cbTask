interface ImageSet {
  blurhash: string;
  original: string;
  webp: string;
}

interface Game {
  game_id: string;
  name: string;
  provider: string;
  providerName: string;
  hasLargeImage?: boolean;
  image: string;
  imageSet: ImageSet;
  url: string;
  order: number;
  tags: string[];
  stats?: any[];
  favoriteCount: number;
  gameId: string;
  image2: string;
}
export interface Category {
  type: string;
  category: string;
  platform: string;
  name: string;
  order: number;
  games: Game[];
}

export interface CategoriesResponse {
  data: Category[];
}
