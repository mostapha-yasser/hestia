// app/api/products/[id]/route.tsx
import { NextResponse } from 'next/server';
import { ProductModel } from '../../../../models/product';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const productModel = await ProductModel.getInstance();
    const product = await productModel.findById(id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch product' }, 
      { status: 500 }
    );
  }
}

