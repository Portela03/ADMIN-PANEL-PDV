import { Table } from '../../components/Table/Table';

import { ChangeEvent, FormEvent, useState } from 'react';

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
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Cadastrar Cliente
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
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
        body={[
          {
            nome: 'João da Silva',
            telefone: '(11) 98765-4321',
            cpf: '123.456.789-00',
            cnpj: '12.345.678/0001-00',
            endereco: 'Rua A, 123, Centro, São Paulo - SP',
            inscricaoEstadual: '123.456.789.012',
          },
          {
            nome: 'Maria Oliveira',
            telefone: '(21) 91234-5678',
            cpf: '987.654.321-00',
            cnpj: '98.765.432/0001-00',
            endereco: 'Avenida B, 456, Bairro, Rio de Janeiro - RJ',
            inscricaoEstadual: '987.654.321.098',
          },
        ]}
      />
    </div>
  );
}
