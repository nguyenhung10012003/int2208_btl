// import mongo use moongose driver. Document see at https://github.com/Automattic/mongoose
const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb+srv://nguyenhung1012003:Nguyenduchung1012003@cluster0.p2cwdej.mongodb.net';

// Database Name
const dbName = 'one_music';

async function connect() {
  // Use connect method to connect to the server
  try {
    await mongoose.connect(url, { dbName: dbName });
    console.log('Connected successfully to server');
  } catch {
    console.error('Connect failure!!');
  }
  return 'done.';
}

module.exports = {connect};