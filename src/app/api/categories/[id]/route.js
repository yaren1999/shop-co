
import connect from "@/utils/db/dbConnect"
import Category from "../../../../models/CategorySchema"
import { NextResponse } from "next/server";
import Product from "../../../../models/ProductsSchema";

export const GET = async (request, {params}) => {
    await connect();
    const {id} = params;

    try {
        const category = await Category.findById(id);
        return new NextResponse(JSON.stringify(category), {status : 200})
    } catch (error) {
        return new NextResponse("kategori getirme hatası", { status : 500})
    }
}

export const DELETE = async (request, {params}) =>{
    await connect();
    const {id} = params;

    try {
        const category = await Category.findByIdAndDelete(id);
        const products = await Product.deleteMany({categoryId : id});
        return new NextResponse("kategori silindi", { status : 200})
    } catch (error) {
        return new NextResponse("kategori silinemedi", {status : 500})
    }
}

export const PUT = async (request, { params }) => {
    const { id } = params;
    await connect();
    const body = await request.json();

    try {
        const category = await Category.updateOne({ _id: id }, body);
        return new NextResponse("Kategori güncellendi", { status: 200 })
    } catch (error) {
        return new NextResponse("Kategori güncellenemedi", { status: 500 })

    }
}
