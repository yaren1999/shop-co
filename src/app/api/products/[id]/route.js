import Product from "../../../../models/ProductsSchema";
import connect from "@/utils/db/dbConnect"
import { NextResponse } from "next/server";


export const GET = async (request,{params}) =>{
    await connect();
    const {id} = params;

    try {
       const product = await product.FindById(id);
       return new NextResponse(JSON.stringify (Product), {status : 200})
    } catch (error) {
        return new NextResponse("ürünler bulunamadı", {status : 500})
    }
}

export const PUT = async ( request, {params}) => {
    await connect();
    const {id} = params;
    const body = await request.json();
    try {
        
        const product = await Product.updateOne({_id : id}, body);
        return new NextResponse("ürünler güncellendi", {status : 200})
    } catch (error) {
        return new NextResponse("ürünler güncellenemedi" , {status : 500})
    }
}

export const DELETE = async (request, {params}) => {
    const {id} = params;
    await connect();
   

    try {
        const product = await Product.findByIdAndDelete(id);
        return new NextResponse("ürün silindi", { status : 200})
    } catch (error) {
        return new NextResponse("ürün silinemedi", {status : 500})
    }
}