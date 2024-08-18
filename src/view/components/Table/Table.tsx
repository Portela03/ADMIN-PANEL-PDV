import classNames from 'classnames';

type Head = {
  value: string;
  key: string;
};

type TableProps<Body> = {
  title: string;
  head: Head[];
  body: Body[];
};

export function Table<Body extends Record<string, any>>({
  head,
  body,
  title,
}: TableProps<Body>) {
  return (
    <div className="rounded-sm border max-lg:border-0 border-stroke bg-white max-lg:bg-transparent shadow-default dark:border-strokedark dark:bg-boxdark">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white px-5 pt-6">
        {title}
      </h4>

      <div className="overflow-x-auto">
        <div className="block lg:hidden">
          {body.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="border border-gray-300 dark:border-gray-700 rounded-lg mb-4 bg-white dark:bg-gray-800 shadow-md"
            >
              {head.map((col) => (
                <div
                  key={col.key}
                  className="p-4 flex items-center justify-between border-b border-stroke dark:border-gray-700 last:border-b-0"
                >
                  <strong className="text-gray-500 dark:text-gray-300 text-sm font-medium">
                    {col.value}
                  </strong>
                  <span className="text-gray-800 dark:text-gray-200 text-sm">
                    {String(row[col.key as keyof Body])}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  {head.map((item) => (
                    <th
                      key={item.key}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300"
                    >
                      {item.value}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                {body.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={classNames(
                      rowIndex < body.length - 1 &&
                        'border-b border-stroke dark:border-gray-700',
                    )}
                  >
                    {head.map((col) => (
                      <td
                        key={col.key}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300"
                      >
                        {String(row[col.key as keyof Body])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
