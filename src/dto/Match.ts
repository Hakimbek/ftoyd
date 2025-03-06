import Team from './Team.ts';

export enum MatchStatus {
  SCHEDULED = 'Scheduled',
  ONGOING = 'Ongoing',
  FINISHED = 'Finished',
}

export default interface Match {
  time: string;
  title: string;
  homeTeam: Team;
  homeScore: number;
  awayTeam: Team;
  awayScore: number;
  status: MatchStatus;
}
