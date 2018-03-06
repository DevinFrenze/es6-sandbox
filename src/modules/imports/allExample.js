import { ImportExample, importExampleCode } from '../utils';
import * as all from './all';

const code = importExampleCode('all.js');
const description = "`import * as NAME` imports an entire module namespace object \
                     assigned to `NAME`."

export default new ImportExample( code, all, description );
