import Match, { MatchStatus } from '../../dto/Match.ts';
import { FilterType } from '../../dto/Filter.ts';

export default function filterLogic(filterStatus: FilterType) {
  return function (match: Match) {
    switch (filterStatus) {
      case FilterType.LIVE:
        return match.status === MatchStatus.ONGOING;
      case FilterType.FINISHED:
        return match.status === MatchStatus.FINISHED;
      case FilterType.MATCH_PREPARING:
        return match.status === MatchStatus.SCHEDULED;
      default:
        return true;
    }
  };
}
