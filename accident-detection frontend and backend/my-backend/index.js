const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
   }));
   

const pool = new Pool({
 user: 'postgres',
 host: 'localhost',
 database: 'accident',
 password: 'h7VNCJ@1',
 port: 5432,
});


app.get('/api/videos', async (req, res) => {
 try {
    const result = await pool.query('SELECT * FROM videos');
    res.json(result.rows);
 } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching videos' });
 }
});



app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
