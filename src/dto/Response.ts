import { Matches } from './Match.ts';

export default interface Response {
  data: Matches;
  ok: boolean;
}
