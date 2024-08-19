import classNames from 'classnames';
import { Table } from '../../components/Table/Table';
import { useSeller } from './useSeller';

export function SellerCreate() {
  const { errors, onsubmit, register } = useSeller();

  return (
    <div className="max-w-2xl mx-auto p-6 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Cadastrar Vendedor
      </h2>
      <form onSubmit={onsubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Nome é obrigatório' })}
            className={classNames(
              'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm',
              {
                'border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-400':
                  errors.name,
                'border-gray-300 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400':
                  !errors.name,
              },
            )}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
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

export function SellerList() {
  return (
    <div>
      <Table
        title="Lista de Vendedores"
        head={[{ value: 'Nome', key: 'name' }]}
        body={[
          {
            name: 'João da Silva',
          },
          {
            name: 'Maria Oliveira',
          },
        ]}
      />
    </div>
  );
}
