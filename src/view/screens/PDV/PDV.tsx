import { Controller } from 'react-hook-form';
import { FaUserPlus, FaUserTie, FaBox } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { usePDV } from './usePDV';

export function PDV() {
  const { clients, sellers, control, products, onsubmit} = usePDV();
  return (
    <div className="max-w-2xl mx-auto p-6 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-300 dark:text-gray-300 mb-6">
        Ponto de Venda
      </h2>
      <form onSubmit={onsubmit} className="space-y-6">
        <div>
          <label
            htmlFor="client"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Cliente
          </label>
          <Controller
            name="client"
            control={control}
            render={({ field }) => (
              <select
                id="client"
                {...field}
                className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
              >
                <option value="">Escolha um cliente</option>
                {clients.value.map((c, index) => (
                  <option key={index} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            )}
          />
          <div className="mt-2 flex gap-2">
            <Controller
              name="newClient"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="Cadastrar novo cliente"
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                />
              )}
            />
            <button
              type="button"
              onClick={clients.add}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <FaUserPlus size={20} />
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="seller"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Vendedor
          </label>
          <Controller
            name="seller"
            control={control}
            render={({ field }) => (
              <select
                id="seller"
                {...field}
                className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
              >
                <option value="">Escolha um vendedor</option>
                {sellers.value.map((s, index) => (
                  <option key={index} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            )}
          />
          <div className="mt-2 flex gap-2">
            <Controller
              name="newSeller"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="Cadastrar novo vendedor"
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                />
              )}
            />
            <button
              type="button"
              onClick={sellers.add}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <FaUserTie size={20} />
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="product"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Produto
          </label>
          <Controller
            name="product"
            control={control}
            render={({ field }) => (
              <select
                id="product"
                {...field}
                className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
              >
                <option value="">Escolha um produto</option>
                {products.value.map((p, index) => (
                  <option key={index} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            )}
          />
          <div className="mt-2 flex gap-2">
            <Controller
              name="newProduct"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="Cadastrar novo produto"
                  className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
                />
              )}
            />
            <button
              type="button"
              onClick={products.add}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <FaBox size={20} />
            </button>
          </div>
        </div>

        <div>
          <label
            htmlFor="paymentMethod"
            className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2"
          >
            Forma de Pagamento
          </label>
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <select
                id="paymentMethod"
                {...field}
                className="block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-400 dark:focus:border-indigo-400 sm:text-sm"
              >
                <option value="">Escolha uma forma de pagamento</option>
                <option value="creditCard">Cartão de Crédito</option>
                <option value="debitCard">Cartão de Débito</option>
                <option value="cash">Dinheiro</option>
                <option value="bankTransfer">Transferência Bancária</option>
              </select>
            )}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            <MdAddShoppingCart size={20} />
            Finalizar Venda
          </button>
        </div>
      </form>
    </div>
  );
}
