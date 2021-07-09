const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/db.js');

app.use(express.static(__dirname + "/../dist"));
app.use('/emojis/burger.png', express.static(__dirname + "/../emojis/burger.png"));
app.use('/emojis/beer.png', express.static(__dirname + "/../emojis/beer.png"));
app.use('/emojis/music.png', express.static(__dirname + "/../emojis/music.png"));
app.use('/emojis/outdoor.png', express.static(__dirname + "/../emojis/outdoor.png"));
//middle-ware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/entry', async (req, res) => {
  try {
    const params = req.params;

    let query = 'SELECT * FROM ENTRY ORDER BY Id DESC';

    if (req.params === 'Food') {
      query = 'SELECT * FROM ENTRY WHERE CATEGORY=food ORDER BY Id DESC';
    } else if (req.params === 'Outdoor') {
      query = 'SELECT * FROM ENTRY WHERE CATEGORY=outdoor ORDER BY Id DESC';
    } else if (req.params === 'Music') {
      query = 'SELECT * FROM ENTRY WHERE CATEGORY=music ORDER BY Id DESC';
    } else if (req.params === 'Bars') {
      query = 'SELECT * FROM ENTRY WHERE CATEGORY=bars ORDER BY Id DESC';
    }

    const [rows] = await db.getAllEntrys(query);
    res.statusCode = 200;
    res.send(rows);
  } catch (err) {
    res.statusCode = 404;
    res.send(err);
  }
});

app.post('/entry', async (req, res) => {
  try {
    const body = req.body.array;
    const result = await db.addAEntry([... body, new Date()]);
    res.statusCode = 200;
    res.send('entry added!!');
  } catch (err) {
    res.statusCode = 404;
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});