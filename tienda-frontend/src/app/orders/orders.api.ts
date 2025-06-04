import { getAuthToken } from '../auth/auth.utils';

const API_URL = 'https://ominous-succotash-pjr6v6w6q99vhrvwj-4000.app.github.dev/api';

export interface OrderItem {
  id: number;
  quantity: number;
  price: number;
  product: {
    name: string;
    image?: string;
  };
}

export interface Order {
  id: number;
  total: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
}

export const getOrders = async (): Promise<Order[]> => {
  const token = getAuthToken();
  if (!token) throw new Error('Not authenticated');

  const response = await fetch(`${API_URL}/orders`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get orders');
  }

  return response.json();
};

export const getOrder = async (id: number): Promise<Order> => {
  const token = getAuthToken();
  if (!token) throw new Error('Not authenticated');

  const response = await fetch(`${API_URL}/orders/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get order');
  }

  return response.json();
};
