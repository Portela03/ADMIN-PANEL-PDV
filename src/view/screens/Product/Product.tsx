
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from '../../components/Table/Table';
import { URL_API } from '../../../data/datasource/api';
import { ProductModel } from '../../../data/models/Product/Product.model';


export function ProductList() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<ProductModel[]>(`${URL_API}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        setError('Erro ao carregar os produtos.');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Table
        title="Lista de Produtos"
        head={[
          { value: 'Nome', key: 'name' },
          { value: 'Código de Referência', key: 'referenceCode' },
          { value: 'Preço Atacado', key: 'wholesalePrice' },
          { value: 'Preço Varejo', key: 'retailPrice' },
        ]}
        body={products.map((product) => ({
          name: product.name,
          referenceCode: product.ref,
          wholesalePrice: product.wholesalePrice,
          retailPrice: product.retailPrice,
        }))}
      />
    </div>
  );
}
