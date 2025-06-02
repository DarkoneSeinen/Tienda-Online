import Link from "next/link";
import {buttonVariants} from '@/components/ui/button';


function HomePage(){
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Online Store</h1> 

      <Link href={"/products/new"}
      className={buttonVariants()}>
        Create Product
      </Link> 
    </div>
  )
}
export default HomePage;

// el Link hace un enlace a la ruta /products/new, que es donde se encuentra el formulario para crear un nuevo producto.