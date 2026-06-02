const filteredProducts = data.filter(
    (product) => product.category === category
);
return (
    <div>
        {filteredProducts.map((product) => (
            <ProductItem
                key={product.id}
                product={product}
            />
        ))}
    </div>
);