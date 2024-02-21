import { Game } from "./Game.model";

export interface Category {
  type: string;
  category: string;
  platform: string;
  name: string;
  order: number;
  games: Game[];
  totalGames: number;
}

export interface CategoriesResponse {
  data: Category[];
}
export { Game };

