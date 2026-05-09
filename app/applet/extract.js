const https = require('https');
https.get('https://ntpblue.netlify.app/assets/index-DWonddSm.js', r => {
  let d = '';
  r.on('data', c => d += c);
  r.on('end', () => {
    const matches = Array.from(d.matchAll(/\"([^\"]{2,})\"/g))
      .map(m => m[1])
      .filter(s => !s.includes('.js') && !s.includes('.css') && !s.includes('react') && !s.includes('function') && s.length > 3)
      .filter(s => !/^[a-zA-Z0-9_\-]+$/.test(s)); // Filter out simple class names and ids
    console.log(matches.join('\\n'));
  });
});
