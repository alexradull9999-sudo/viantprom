const https = require('https');

https.get('https://viantprom.ru/kviz', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const colors = data.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgba?\([^)]+\)/g);
    if (colors) {
      const counts = {};
      colors.forEach(c => counts[c] = (counts[c] || 0) + 1);
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 20);
      console.log(sorted);
    } else {
      console.log('No colors found');
    }
  });
}).on('error', (err) => {
  console.error(err);
});
