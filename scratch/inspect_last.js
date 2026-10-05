const fs = require('fs');
const readline = require('readline');

async function main() {
  const fileStream = fs.createReadStream('C:\\Users\\Mr Nadeem\\.gemini\\antigravity-ide\\brain\\9036fb62-274f-486c-9e2c-bad78b5b5184\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const data = JSON.parse(line);
      if (data.step_index >= 1720 && data.step_index <= 1810) {
        if (data.tool_calls) {
          for (const call of data.tool_calls) {
            console.log(`[Step ${data.step_index}] ${call.name}:`, JSON.stringify(call.args).slice(0, 150));
          }
        }
      }
    } catch (e) {}
  }
}
main();
