import { Table } from '../../components/Table/Table';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { URL_API } from '../../../data/datasource/api';
import { InsertCustomerModel } from '../../../data/models/CustomerList/CustomerList.model';
import axios from 'axios';

export function CustomerCreate() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cpf: '',
    cnpj: '',
    endereco: '',
    inscricaoEstadual: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Cadastrar Cliente
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="telefone"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="cpf"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="cnpj"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            CNPJ
          </label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="endereco"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Endereço Completo
          </label>
          <textarea
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
            required
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="inscricaoEstadual"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Inscrição Estadual
          </label>
          <input
            type="text"
            id="inscricaoEstadual"
            name="inscricaoEstadual"
            value={formData.inscricaoEstadual}
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
export function CustomerList() {

  const [customer, setCustomer] = useState<InsertCustomerModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=>{
    axios.get<InsertCustomerModel[]>(`${URL_API}/clients`)
      .then((response)=>{
        setCustomer(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        setError(error);
        
      })
      .finally(() => {
        setLoading(false)

      })

  },[])

  if (loading) return <div>Carregando...</div>;
  if(error) return <div>{error}</div>
  


  return (
    <div>
  <Table
  title="Lista de Clientes"
  head={[
    { value: 'Nome', key: 'nome' },
    { value: 'Telefone', key: 'telefone' },
    { value: 'CPF', key: 'cpf' },
    { value: 'CNPJ', key: 'cnpj' },
    { value: 'Endereço', key: 'endereco' },
    { value: 'Inscrição Estadual', key: 'inscricaoEstadual' },
  ]}
  body={customer.map((customer) => ({
    nome: customer.name,
    telefone: customer.phone,
    cpf: customer.cpf,
    cnpj: customer.cnpj,
    endereco: `${customer.street}, ${customer.number}, ${customer.neighborhood}, ${customer.city} - ${customer.state}`,
    inscricaoEstadual: customer.stateRegistration,
  }))}
/>


    </div>
  );
}
