import { NextRequest, NextResponse } from 'next/server';

import { ProductModel } from '../../../../models/product';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productModel = await ProductModel.getInstance();
    const product = await productModel.findById(params.id);

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
