// Test script to verify DATABASE_URL
import 'dotenv/config';
import pg from 'pg';

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('Type:', typeof process.env.DATABASE_URL);
console.log('Length:', process.env.DATABASE_URL?.length);

const pool = new pg.Pool({ 
  connectionString: process.env.DATABASE_URL 
});

try {
  const client = await pool.connect();
  console.log('✅ Successfully connected to PostgreSQL!');
  await client.query('SELECT NOW()');
  console.log('✅ Query executed successfully!');
  client.release();
  await pool.end();
} catch (error) {
  console.error('❌ Connection error:', error.message);
  process.exit(1);
}
