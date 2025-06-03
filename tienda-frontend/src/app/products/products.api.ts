export async function getProducts() {
  const data = await fetch('https://ominous-succotash-pjr6v6w6q99vhrvwj-4000.app.github.dev/api/products');
  return await data.json();
}

export async function getProduct(id: string) {
  const data = await fetch(`https://ominous-succotash-pjr6v6w6q99vhrvwj-4000.app.github.dev/api/products/${id}`);
  return await data.json();
}

export async function createProduct(productData: any){

    const res = await fetch('https://ominous-succotash-pjr6v6w6q99vhrvwj-4000.app.github.dev/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            cache: 'no-store',
        },
        body: JSON.stringify(productData),
    })
    const data= await res.json()
    console.log(data)
}

export async function deleteProduct(id: string) {
    const res = await fetch(`https://ominous-succotash-pjr6v6w6q99vhrvwj-4000.app.github.dev/api/products/${id}`, {
        method: "DELETE",
    });
    return await res.json();
}
