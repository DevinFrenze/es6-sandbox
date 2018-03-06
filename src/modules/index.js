import { writeReadMe } from './utils';
import exportExamples from './exports';
import importExamples from './imports';

writeReadMe(exportExamples.concat(importExamples));
