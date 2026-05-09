const https = require('https');
https.get('https://ntpblue.netlify.app/assets/index-DWonddSm.js', r => {
  let d = '';
  r.on('data', c => d += c);
  r.on('end', () => {
    const minLen = 5;
    const matches = Array.from(d.matchAll(/\"([^\"]{5,})\"/g))
      .map(m => m[1])
      .filter(s => /[A-Z \.,;:!?-]{5,}/.test(s)); // Only look for longer sentences
    console.log(matches.join('\\n'));
  });
});
