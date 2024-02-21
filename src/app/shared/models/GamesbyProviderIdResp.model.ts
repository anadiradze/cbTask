import { Game } from './Game.model';

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
export { Game };

