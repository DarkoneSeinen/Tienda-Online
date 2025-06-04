'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-green-600 mb-4">¡Order Successful!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been successfully processed.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => router.push('/')}
            className="w-full"
          >
            Continue Shopping
          </Button>
          
          <Button
            variant="outline"
            onClick={() => router.push('/orders')}
            className="w-full"
          >
            View Orders
          </Button>
        </div>
      </Card>
    </div>
  );
}
