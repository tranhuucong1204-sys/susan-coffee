import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";
export async function PATCH(request, {params}) { 
    try {
        const client = await clientPromise;
        const db = client.db();
        const {id}= await params;
        const body = await request.json();
        const {status} = body;
        if (!status) {
            return Response.json({status:"error", message: "Thiếu thông tin trạng thái đơn hàng"});
        }
        const result = await db.collection('orders').updateOne(
            {_id: new ObjectId(id)},
            {$set: {status}}
        );
        return Response.json({status: "success"});
    }catch (error){
        console.error(error);
        return Response.json({error:"Lỗi kết nối cơ sở dữ liệu rồi ní"});
    };
}
