import mysql from "mysql2/promise";
import {NextResponse} from "next/server";

export async function GET(request: any) {

    const dbPool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        //port: (process.env.MYSQL_PORT) ? parseInt(process.env.MYSQL_PORT) : undefined,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    });

    try {
        const connection1 = await dbPool.getConnection();
        const query1 = "SELECT * FROM objects";
        const [objects] = await connection1.execute(query1);
        connection1.release();

        const connection2 = await dbPool.getConnection();
        const query2 = "SELECT * FROM layout";
        const [layout] = await connection2.execute(query2);
        connection2.release();

        const connection3 = await dbPool.getConnection();
        const query3 = "SELECT * FROM o_data";
        const [o_data] = await connection3.execute(query3);
        connection3.release();

        const connection4 = await dbPool.getConnection();
        const query4 = "SELECT * FROM logic";
        const [logic] = await connection4.execute(query4);
        connection4.release();

        const connection5 = await dbPool.getConnection();
        const query5 = "SELECT * FROM resolved_data";
        const [resolved_data] = await connection5.execute(query5);
        connection5.release();

        const connection6 = await dbPool.getConnection();
        const query6 = "SELECT * FROM data_types";
        const [data_types] = await connection6.execute(query6);
        connection6.release();

        const connection7 = await dbPool.getConnection();
        const query7 = "SELECT * FROM resolvable_tags";
        const [resolvable_tags] = await connection7.execute(query7);
        connection7.release();

        const connection8 = await dbPool.getConnection();
        const query8 = "SELECT * FROM tags";
        const [tags] = await connection8.execute(query8);
        connection8.release();


        return NextResponse.json({objects, layout, o_data, logic, resolved_data, data_types, resolvable_tags, tags}, { status: 200 });
    }

    catch (error) {
        console.error(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }


}