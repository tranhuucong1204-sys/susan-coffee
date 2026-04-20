import clientPromise from "@/libs/mongodb";

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const tableList = await db.collection('tables').find({}).toArray();
        return Response.json(tableList);
    }catch (error){
        console.error(error);
        return Response.json({error:"Lỗi kết nối cơ sở dữ liệu rồi ní"});
    }
}

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const body = await request.json();
        const { name, location } = body;
        if(!name || !location){
            return Response.json({error:"Thiếu thông tin bàn rồi ní"}, {status: 400});
        }
        const newTable = {
            name,
            location,
        };
        const result = await db.collection('tables').insertOne(newTable);
        return Response.json({status: "success"});
    }catch (error){
        console.error(error);
        return Response.json({error:"Lỗi kết nối cơ sở dữ liệu rồi ní"});
    }
}
