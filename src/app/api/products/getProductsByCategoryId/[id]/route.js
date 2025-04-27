import Product from "../../../../../models/ProductsSchema"
import connect from "@/utils/db/dbConnect";
import { NextResponse } from "next/server";



export const GET = async (request, { params }) => {
    const { id } = params;
    await connect();

    try {
        const products = await Product.find({ categoryId: id })
        return new NextResponse(JSON.stringify(products), { status: 200 })
    } catch (error) {
        return new NextResponse("ürün bulma hatası", { status: 500 })
    }
}