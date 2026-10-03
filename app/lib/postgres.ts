import postgres from 'postgres';

const connectionString = process.env.POSTGRES_URL!;

function shouldUseSsl(url: string) {
  try {
    const hostname = new URL(url).hostname;
    return hostname !== 'localhost' && hostname !== '127.0.0.1';
  } catch {
    return true;
  }
}

export const sql = postgres(connectionString, {
  ssl: shouldUseSsl(connectionString) ? 'require' : false,
});
