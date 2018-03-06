import { ExportExample, exportExampleCode } from '../utils';
import * as defaultResult from './default';

const code = exportExampleCode('default.js');
const description = "Default exports have their own shorthand. You can put any \
                     value after `export default` and it will be the default \
                     export. There can only be one default export."

export default new ExportExample( code, defaultResult, description );
