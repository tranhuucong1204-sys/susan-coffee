import clientPromise from "@/libs/mongodb";

export async function GET(request) { //Trả về ds sản phẩm
    try {
        const client = await clientPromise;
        const db = client.db();
        const productList = await db.collection('products').find({}).toArray();
        return Response.json(productList);
    }catch (error){
        console.error(error);
        return Response.json({error:"Lỗi kết nối cơ sở dữ liệu rồi ní"});
    };
    


}
export function POST(request) { //Trả về ds sản phẩm


}