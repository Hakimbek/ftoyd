import Match from './Match.ts';

export default interface Response {
  data: {
    matches: Match[];
  };
  ok: boolean;
}
