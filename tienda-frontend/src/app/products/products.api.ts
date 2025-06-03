export async function createProduct(productData: any){

    const res = await fetch('https://ominous-succotash-pjr6v6w6q99vhrvwj-4000.app.github.dev/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    })
    const data= await res.json()
    console.log(data)
}