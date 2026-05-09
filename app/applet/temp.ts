import https from 'https';
import fs from 'fs';

https.get('https://ntpblue.netlify.app/assets/index-DWonddSm.js', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('bundle.js', data);
    console.log('Done');
  });
});
