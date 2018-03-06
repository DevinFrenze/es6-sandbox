import { ImportExample, importExampleCode } from '../utils';
import * as d from './default';

const code = importExampleCode('default.js');
const description = "`import NAME` without curly braces imports the default \
                     export and assigns it to `NAME`."

export default new ImportExample( code, d, description );
