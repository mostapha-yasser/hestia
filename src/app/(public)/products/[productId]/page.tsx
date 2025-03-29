
 async function ProductDetail({params}:{params:Promise<{productId:string}>}) {
   const productId=(await params).productId 
    return (
        <div>
            Product Detail for product with id={productId}
            
        </div>
    );
}

export default ProductDetail;