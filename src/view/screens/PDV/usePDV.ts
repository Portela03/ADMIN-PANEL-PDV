import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  client: string;
  newClient: string;
  seller: string;
  newSeller: string;
  product: string;
  newProduct: string;
  paymentMethod: string;
}

export function usePDV() {
  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      client: '',
      newClient: '',
      seller: '',
      newSeller: '',
      product: '',
      newProduct: '',
      paymentMethod: '',
    },
  });

  const [clients, setClients] = useState<string[]>([]);
  const [sellers, setSellers] = useState<string[]>([]);
  const [products, setProducts] = useState<string[]>([]);

  const newClient = watch('newClient');
  const newSeller = watch('newSeller');
  const newProduct = watch('newProduct');

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleAddClient = () => {
    const client = newClient.trim();
    if (client) {
      const updatedClients = [...clients, client];
      setClients(updatedClients);
      setValue('client', client);
      setValue('newClient', '');
    }
  };

  const handleAddSeller = () => {
    const seller = newSeller.trim();
    if (seller) {
      const updatedSellers = [...sellers, seller];
      setSellers(updatedSellers);
      setValue('seller', seller);
      setValue('newSeller', '');
    }
  };

  const handleAddProduct = () => {
    const product = newProduct.trim();
    if (product) {
      const updatedProducts = [...products, product];
      setProducts(updatedProducts);
      setValue('product', product);
      setValue('newProduct', '');
    }
  };

  return {
    products: {
      value: products,
      add: handleAddProduct,
    },
    sellers: {
      value: sellers,
      add: handleAddSeller,
    },
    clients: {
      value: clients,
      add: handleAddClient,
    },
    control,
    onsubmit: handleSubmit(onSubmit),
  };
}
