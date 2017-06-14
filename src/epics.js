import 'rxjs';
import { combineEpics } from 'redux-observable';

import {
  exampleEpic,
  fetchMovieEpic,
} from './modules/Example/epics';

const rootEpic = combineEpics(
  exampleEpic,
  fetchMovieEpic,
);

export default rootEpic;
