import { writeReadMe } from './utils';
import exportExamples from './exports';
import importExamples from './imports';

writeReadMe(importExamples, 'es6_imports');
writeReadMe(exportExamples, 'es6_exports');
