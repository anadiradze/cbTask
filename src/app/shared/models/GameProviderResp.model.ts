export interface GameProvider {
  _id: string;
  name: string;
  iframeW: number;
  iframeH: number;
  vendor: string;
  provider: string;
  type: 'slot';
  order: number;
  enabled: boolean;
  logo: string;
  tags: string[];
  gamesCount: number;
  totalGames: number;
  category:string
}

export interface GameProvidersResponse {
  data: GameProvider[];
}
