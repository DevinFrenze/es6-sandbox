import { ImportExample, importExampleCode } from '../utils';
import * as specific from './specific';

const code = importExampleCode('specific.js');
const description = "You can import specific entities from a module and rename \
                     them as you please."

export default new ImportExample( code, specific, description );
