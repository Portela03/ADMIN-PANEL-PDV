import { Table } from '../../components/Table/Table';
import { useState, ChangeEvent, FormEvent } from 'react';

export function ProductCreate() {
  const [formData, setFormData] = useState({
    name: '',
    referenceCode: '',
    wholesalePrice: '',
    retailPrice: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Cadastrar Produto
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="referenceCode"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Código de Referência
          </label>
          <input
            type="text"
            id="referenceCode"
            name="referenceCode"
            value={formData.referenceCode}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="wholesalePrice"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Preço Atacado
          </label>
          <input
            type="number"
            id="wholesalePrice"
            name="wholesalePrice"
            value={formData.wholesalePrice}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="retailPrice"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Preço Varejo
          </label>
          <input
            type="number"
            id="retailPrice"
            name="retailPrice"
            value={formData.retailPrice}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export function ProductList() {
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
        body={[
          {
            name: 'Produto A',
            referenceCode: '123ABC',
            wholesalePrice: 10.0,
            retailPrice: 15.0,
          },
          {
            name: 'Produto B',
            referenceCode: '456DEF',
            wholesalePrice: 12.0,
            retailPrice: 18.0,
          },
        ]}
      />
    </div>
  );
}
