import fs from 'fs';
import path from 'path';

function fileContents(filename) {
  const filePath = filename.replace('lib', 'src');
  return fs.readFileSync(filePath, 'utf8');
}

export function exportExampleCode(filename) {
  return fileContents(path.join(__dirname, 'exports', filename));
}

export function importExampleCode(filename) {
  return fileContents(path.join(__dirname, 'imports', filename));
}

export class CodeExample {
  constructor( code, result, description, explanation) {
    this.code = code;
    this.result = result;
    this.description = description;
    this.explanation = explanation;
  }
}

export class ImportExample extends CodeExample {
  constructor( code, result, description, explanation = 'imports') {
    const codeLines = code.split('\n');
    super(codeLines[0], result, description, explanation);
  }
}

export class ExportExample extends CodeExample {
  constructor( code, result, description, explanation = 'exports') {
    super(code, result, description, explanation);
  }
}

function codeBlock(s) {
  return "```\n" + s + "\n```";
}


export function writeReadMe(codeExamples) {
  const stream = fs.createWriteStream("README.md");
  const lineBreak = '\n\n';

  stream.once('open', () => {
    codeExamples.forEach( (codeExample) => {
      stream.write(lineBreak);
      stream.write(codeExample.description);
      stream.write(lineBreak);
      stream.write(codeBlock(codeExample.code));
      stream.write(lineBreak);
      stream.write(codeExample.explanation);
      stream.write(lineBreak);
      stream.write(codeBlock(JSON.stringify(codeExample.result)));
      stream.write(lineBreak);
      stream.write('___');
    });

    stream.end();
  });
}
