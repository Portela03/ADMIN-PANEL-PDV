import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLogout, MdOutlineEventNote, MdOutlineKeyboardArrowDown, MdOutlinePerson, MdSettings } from 'react-icons/md';
import { ClickOutside } from '../../components/ClickOutside/ClickOutside';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Leonardo Martins
          </span>
          <span className="block text-xs">CEO</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src='data:image/jpeg;base64,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' alt="User" className='h-12 w-12 rounded-full' />
        </span>
        <MdOutlineKeyboardArrowDown size={20} className='hidden fill-current sm:block' />
      </Link>
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <MdOutlinePerson size={20} />
                Meu Perfil
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <MdOutlineEventNote size={20} />
                Meus Contatos
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <MdSettings size={20} />
                Configurações
              </Link>
            </li>
          </ul>
          <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <MdLogout size={20} />
            Log Out
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
