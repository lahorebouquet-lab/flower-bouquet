const fs = require('fs');

const content = fs.readFileSync('C:/Users/Mr Nadeem/.gemini/antigravity-ide/brain/7c725e93-cf1d-4a09-bbda-0c99f162a4f2/.system_generated/logs/transcript.jsonl', 'utf8');
const lines = content.trim().split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  try {
    const step = JSON.parse(lines[i]);
    if (step.type === 'USER_INPUT') {
      console.log('Step index:', step.step_index);
      console.log('Content preview:');
      console.log(step.content.slice(0, 1000));
      
      // Look for audits in this content
      const text = step.content;
      console.log('\nKeys found in text:');
      ['largest-contentful-paint', 'speed-index', 'first-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift'].forEach(k => {
        const idx = text.indexOf(k);
        if (idx !== -1) {
          console.log(k, '->', text.slice(idx, idx + 250).replace(/\n/g, ' '));
        }
      });
      break;
    }
  } catch(e) {}
}
