import Product from "../../../models/ProductsSchema";
import connect from "@/utils/db/dbConnect"
import { NextResponse } from "next/server";


export const GET = async (request) => {
    await connect();

    try {
        const products = await Product.find();
        return new NextResponse(JSON.stringify(products), {status : 200})
    } catch (error) {
        return new NextResponse("ürünler bulunamadı", {status : 500})
    }
}

export const POST = async (request) =>{
    await connect();

    try {
        const body = await request.json();
        const product = await Product.create(body);
        return new NextResponse("ürün eklendi", {status : 200})
    } catch (error) {
        return new NextResponse("ürün eklenemedi", {status : 500})
    }
}