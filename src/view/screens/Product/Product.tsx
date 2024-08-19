import classNames from 'classnames';
import { Table } from '../../components/Table/Table';
import { useProduct } from './useProduct';

export function ProductCreate() {
  const { errors, register, onsubmit } = useProduct();

  return (
    <div className="max-w-2xl mx-auto p-6 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Cadastrar Produto
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
          <label
            htmlFor="referenceCode"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Código de Referência
          </label>
          <input
            type="text"
            id="referenceCode"
            {...register('referenceCode', {
              required: 'Código de referência é obrigatório',
            })}
            className={classNames(
              'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm',
              {
                'border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-400':
                  errors.referenceCode,
                'border-gray-300 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400':
                  !errors.referenceCode,
              },
            )}
          />
          {errors.referenceCode && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.referenceCode.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="wholesalePrice"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Preço Atacado
          </label>
          <input
            type="number"
            id="wholesalePrice"
            {...register('wholesalePrice', {
              required: 'Preço atacado é obrigatório',
            })}
            className={classNames(
              'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm',
              {
                'border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-400':
                  errors.wholesalePrice,
                'border-gray-300 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400':
                  !errors.wholesalePrice,
              },
            )}
          />
          {errors.wholesalePrice && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.wholesalePrice.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="retailPrice"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Preço Varejo
          </label>
          <input
            type="number"
            id="retailPrice"
            {...register('retailPrice', {
              required: 'Preço varejo é obrigatório',
            })}
            className={classNames(
              'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm',
              {
                'border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-400':
                  errors.retailPrice,
                'border-gray-300 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400':
                  !errors.retailPrice,
              },
            )}
          />
          {errors.retailPrice && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.retailPrice.message}
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
