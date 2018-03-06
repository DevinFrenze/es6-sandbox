import { ImportExample, importExampleCode } from '../utils';
import * as evaluate from './evaluate';

const code = importExampleCode('evaluate.js');
const description = "You can use `import` to evaluate a module without actually\
                      importing anything."

export default new ImportExample( code, evaluate, description );
