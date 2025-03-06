import Player from './Player.ts';

export default interface Team {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}
