import { ObjectId } from "mongodb";
import clientPromise from "@/libs/mongodb";


export async function PATCH(request, { params }) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const { id } = await params;
        const body = await request.json();
        const { name, location } = body;
         if(!name || !location){
            return Response.json({error:"Thiếu thông tin bàn rồi ní"}, {status: 400});
        }
        const result = await db.collection('tables').updateOne(
            { _id: new ObjectId(id) },
            { $set: { name, location } }
        );
        return Response.json({status: "success"});
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
export async function DELETE(request, { params }) {
    try {
        const client = await clientPromise;
        const db = client.db();
        const { id } = await params;
        const result = await db.collection('tables').deleteOne({ _id: new ObjectId(id) });
        if(result.deletedCount == 0){
            return Response.json({error:"Không tìm thấy bàn để xóa rồi ní"}, {status: 404});
        }
        return Response.json({status: "success"});
    }catch (error){
        console.error(error);
        return Response.json({error:"Lỗi kết nối cơ sở dữ liệu rồi ní"});
    }
}
        