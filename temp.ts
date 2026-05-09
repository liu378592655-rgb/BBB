import https from 'https';

https.get('https://ntpblue.netlify.app/assets/index-DWonddSm.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Look for text literals in the minified JS bundle
    const textMatches = data.match(/"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
    const strings = textMatches
      .map(s => s.slice(1, -1))
      .filter(s => s.length > 10 && !s.includes('.js') && !s.includes('.css') && !s.includes('<svg'))
      .filter(s => /^[ A-Za-z0-9,.\-!?]+$/.test(s));
    console.log(strings.slice(0, 100).join('\\n'));
  });
});
