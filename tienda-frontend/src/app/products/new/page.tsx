import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductFrom } from "./product-form";

function ProductsNewPage(){
    return(
        <div className="h-screen flex justify-center items-center">
            <Card>
              <CardHeader>
                <CardTitle>
                  Create Product
                </CardTitle>
              </CardHeader>
                <CardContent>
                    <ProductFrom />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductsNewPage