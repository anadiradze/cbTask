export interface ImageSet {
    blurhash: string;
    original: string;
    webp: string;
  }
export interface Game {
    game_id: string;
    remoteId: string;
    name: string;
    provider: string;
    providerName?: string;
    hasLargeImage?: boolean;
    image: string;
    imageSet: ImageSet;
    url: string;
    order: number;
    tags: string[];
    favoriteCount: number;
    gameId: string;
    image2: string;
  }