// backend/server.js

import { Server } from 'ws';
import { MongoClient } from 'mongodb';

export function startWebSocketServer() {
  const wss = new Server({ port: 3001 }); // WebSocket server port

  // MongoDB Atlas connection URI
  const uri = 'process.env.URLDB';

  wss.on('connection', (ws) => {
    console.log('Client connected');

    // Connect to MongoDB Atlas
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
      }

      console.log('Connected to MongoDB Atlas');

      const db = client.db('water_level_db');
      const collection = db.collection('water_level_data');

      // Watch for changes in the collection
      const changeStream = collection.watch();
      changeStream.on('change', (change) => {
        // Send real-time updates to connected clients
        ws.send(JSON.stringify(change.fullDocument));
      });
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
}
