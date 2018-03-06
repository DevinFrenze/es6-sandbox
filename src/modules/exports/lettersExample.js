import { ExportExample, exportExampleCode } from '../utils';
import * as letters from './letters';

const code = exportExampleCode('letters.js');
const description = "You export entities namespaced to the module. This \
                      example uses const, but would also work with let, var,\
                       class or function";

export default new ExportExample( code, letters, description);
