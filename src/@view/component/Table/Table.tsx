import { BRAND } from '../../../types/brand';

const Table = ({ brandData }: { brandData: BRAND[] }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white px-5 pt-6">
        Meus Clientes
      </h4>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Nome
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                CPF/CNPJ
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Telefone
              </th>
              <th className="hidden px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300 sm:table-cell">
                Ações
              </th>
              <th className="hidden px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300 sm:table-cell">
                Conversion
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {brandData.map((brand, key) => (
              <tr
                className={`${
                  key === brandData.length ? '' : 'border-b border-stroke dark:border-strokedark'
                }`}
                key={key}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img src={brand.logo} alt="Brand" className="w-16 h-16 rounded-full" />
                    <p className="text-sm font-medium text-gray-900 dark:text-white hidden sm:block">
                      {brand.name}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-center">
                  {brand.visitors}K
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-center">
                  ${brand.revenues}
                </td>
                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-center sm:table-cell">
                  {brand.sales}
                </td>
                <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300 text-center sm:table-cell">
                  {brand.conversion}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
