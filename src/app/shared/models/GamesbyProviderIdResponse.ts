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
    hasLargeImage: boolean;
    image: string;
    imageSet: ImageSet;
    url: string;
    order: number;
    tags: string[];
    stats: any[];
    favoriteCount: number;
    gameId: string;
    image2: string;
  }
  
  export interface SlotData {
    type: string;
    provider: string;
    vendor: string;
    iframeW: number;
    iframeH: number;
    name: string;
    order: number;
    tags: string[];
    games: Game[];
  }
  
  export interface RootObject {
    data: SlotData;
  }
  