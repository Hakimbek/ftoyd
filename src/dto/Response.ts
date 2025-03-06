import Match from './Match.ts';

export default interface Response {
  matches: Match[];
  ok: boolean;
}
