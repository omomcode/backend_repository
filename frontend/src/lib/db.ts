import mysql from 'serverless-mysql';
const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        port: (process.env.MYSQL_PORT) ? parseInt(process.env.MYSQL_PORT) : undefined,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }
});
export default async function executeQuery({ query } : any) {
    try {
        const results = await db.query(query);
        await db.end();
        return results;
    } catch (error) {
        return { error };
    }
}