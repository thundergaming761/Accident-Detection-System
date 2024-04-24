const sqlite3 = require('sqlite3').verbose();

// Open the database
const db = new sqlite3.Database('./videos.db', (err) => {
 if (err) {
    console.error(err.message);
 }
 console.log('Connected to the videos database.');
});

// Create table
db.run(`CREATE TABLE IF NOT EXISTS videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    videoLink TEXT NOT NULL,
    location TEXT NOT NULL
)`, (err) => {
 if (err) {
    console.error(err.message);
 }
 console.log('Videos table created.');
});

// Close the database connection
db.close((err) => {
 if (err) {
    console.error(err.message);
 }
 console.log('Close the database connection.');
});

// db.js

// Function to insert a new video
function insertVideo(videoLink, location) {
    db.run(`INSERT INTO videos(videoLink, location) VALUES(?, ?)`, [videoLink, location], function(err) {
       if (err) {
         return console.error(err.message);
       }
       console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
   }
   
   // Function to get all videos
   function getAllVideos(callback) {
    db.all(`SELECT * FROM videos`, [], (err, rows) => {
       if (err) {
         throw err;
       }
       callback(rows);
    });
   }
   
   module.exports = { insertVideo, getAllVideos };