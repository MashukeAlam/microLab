const express = require('express');
const { getNotices, getPrayerTimes } = require('./functions/scrape');

const app = express();

app.get('/', (req, res) => {
  res.json({'Name': 'James'});
});

app.get('/notices', async (req, res) => {
  const scrapedNotices = await getNotices();
  // const scrapedPrayers = await getPrayerTimes();
  // console.log(scrapedNotices);
  res.json({"Notices": scrapedNotices});
})


// Starting the server.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running. 😁`);
});

