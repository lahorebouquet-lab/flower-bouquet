const fs = require('fs');
const readline = require('readline');

async function main() {
  const fileStream = fs.createReadStream('C:\\Users\\Mr Nadeem\\.gemini\\antigravity-ide\\brain\\9036fb62-274f-486c-9e2c-bad78b5b5184\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('"step_index":305,')) {
      const data = JSON.parse(line);
      const text = data.content;
      const lines = text.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('Section') || lines[i].includes('section') || lines[i].includes('Card') || lines[i].includes('card')) {
          if (lines[i].startsWith('#') || lines[i].startsWith('**') || lines[i].startsWith('##')) {
            console.log(lines[i]);
          }
        }
      }
      break;
    }
  }
}
main();
