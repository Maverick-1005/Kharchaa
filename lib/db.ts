import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB(uri: string) {
  if (isConnected) return;
  if (!uri) throw new Error('MongoDB URI is required');
  await mongoose.connect(uri, {
    dbName: 'kharchaa',
    bufferCommands: false,
  });
  isConnected = true;
}
