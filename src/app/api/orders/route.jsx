
import clientPromise from "@/libs/mongodb";
import { ObjectId } from "mongodb";
export async function GET(request) { 
    try {
        const client = await clientPromise;
        const db = client.db();
        const orderList = await db.collection('orders').aggregate([
            {
                $lookup: {
                    from: 'tables',
                    localField: 'table_id',
                    foreignField: '_id',
                    as: 'table_info'
                }
            },
            {
                $unwind: {
                    path:"$table_info",
                    preserveNullAndEmptyArrays: true
                }
            }
        ]).toArray();
        return Response.json(orderList);
    }catch (error){
        console.error(error);
        return Response.json({error:"Lỗi kết nối cơ sở dữ liệu rồi ní"});
    };
}
export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db();

        const body = await request.json();
        const {name, table_id, order_items,total} = body;
        if (!name || !table_id || !order_items || !total) {
            return Response.json({error: "Thiếu thông tin đơn hàng"}, {status: 400});
        }
        const newOrder = {
            name,
            table_id: new ObjectId(table_id),
            order_items,
            total,
            created_at: new Date(),
            status : "don moi"
        }

        const result = await db.collection('orders').insertOne(newOrder);
        return Response.json({message: "Đơn hàng đã được tạo", code: "success"});
    }catch (error){
        console.error(error);
        return Response.json({error:"Lỗi kết nối cơ sở dữ liệu rồi ní", code: "success"});
    }
}