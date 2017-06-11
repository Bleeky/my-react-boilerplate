import 'rxjs';
import { combineEpics } from 'redux-observable';

import {
  exampleEpic,
} from './modules/Example/epics';

const rootEpic = combineEpics(
  exampleEpic,
);

export default rootEpic;
