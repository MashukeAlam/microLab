const express = require('express');
const { getNotices, getPrayerTimes, getCSENotices, getEEENotices } = require('./functions/scrape');

const app = express();

app.get('/', (req, res) => {
  res.json({'Name': 'James'});
});

app.get('/notices', async (req, res) => {
  const scrapedNotices = await getNotices();
  const scrapedCSENotices = await getCSENotices();
  const scrapedEEENotices = await getEEENotices();
  // const scrapedPrayers = await getPrayerTimes();
  // console.log(scrapedNotices);
  res.json({"General": scrapedNotices, "CSE": scrapedCSENotices, "EEE": scrapedEEENotices});
})


// Starting the server.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running. 😁`);
});

