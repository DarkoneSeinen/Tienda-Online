const API_BASE_URL = 'https://refactored-invention-969jwvvjx572p4jq-4000.app.github.dev/api';
// ent2 :https://refactored-invention-969jwvvjx572p4jq-4000.app.github.dev/api
// https://ominous-succotash-pjr6v6w6q99vhrvwj-4000.app.github.dev/api

export async function getProducts() {
  const data = await fetch(`${API_BASE_URL}/products`);
  return await data.json();
}

export async function getProduct(id: string) {
  const data = await fetch(`${API_BASE_URL}/products/${id}`);
  return await data.json();
}

export async function createProduct(productData: any){
    const res = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            cache: 'no-store',
        },
        body: JSON.stringify(productData),
    })
    const data = await res.json()
    console.log(data)
}

export async function updateProduct(id: string, productData: any) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });
    return await res.json();
}

export async function deleteProduct(id: string) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "DELETE",
    });
    return await res.json();
}
