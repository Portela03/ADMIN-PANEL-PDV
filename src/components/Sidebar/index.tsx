import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import {
  MdAdd,
  MdArrowBack,
  MdOutlineDashboard,
  MdOutlineKeyboardArrowDown,
  MdOutlineShoppingCart,
  MdPerson,
  MdSettings,
  MdVisibility,
} from 'react-icons/md';
import { FaUsers, FaUserPlus, FaUserTie, FaBox, FaShoppingCart } from 'react-icons/fa';
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-x-2 px-6 pt-5.5 lg:pt-6.5">
        <NavLink to="/" className="text-2xl text-white text-bold">
          Moça Bonita
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <MdArrowBack size={24} />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 pb-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup activeCondition={pathname === '/'}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="/"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname === '/' && 'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <MdPerson size={18} />
                        Clientes
                        <MdOutlineKeyboardArrowDown
                          size={20}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                        />
                      </NavLink>
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaUsers size={20} />
                              Ver Clientes
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/clientes/criar"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <FaUserPlus size={20} />
                              Cadastrar Cliente
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <SidebarLinkGroup activeCondition={pathname === '/vendedor'}>
                {(handleClick, open) => (
                  <React.Fragment>
                    <NavLink
                      to="/vendedor"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        pathname === '/vendedor' && 'bg-graydark dark:bg-meta-4'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <FaUserTie size={18} />
                      Vendedor
                      <MdOutlineKeyboardArrowDown
                        size={20}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && 'rotate-180'
                        }`}
                      />
                    </NavLink>
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && 'hidden'
                      }`}
                    >
                      <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                        <li>
                          <NavLink
                            to="/vendedor"
                            className={({ isActive }) =>
                              'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                              (isActive && '!text-white')
                            }
                          >
                            <MdVisibility size={20} />
                            Ver Vendedor
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/vendedor/criar"
                            className={({ isActive }) =>
                              'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                              (isActive && '!text-white')
                            }
                          >
                            <MdAdd size={20} />
                            Cadastrar Vendedor
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              <SidebarLinkGroup activeCondition={pathname === '/produtos'}>
                {(handleClick, open) => (
                  <React.Fragment>
                    <NavLink
                      to="/produtos"
                      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                        pathname === '/produtos' && 'bg-graydark dark:bg-meta-4'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <FaBox  size={18} />
                      Produtos
                      <MdOutlineKeyboardArrowDown
                        size={20}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                          open && 'rotate-180'
                        }`}
                      />
                    </NavLink>
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && 'hidden'
                      }`}
                    >
                      <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                        <li>
                          <NavLink
                            to="/produtos"
                            className={({ isActive }) =>
                              'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                              (isActive && '!text-white')
                            }
                          >
                            <MdVisibility size={20} />
                            Ver Produtos
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/produtos/criar"
                            className={({ isActive }) =>
                              'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                              (isActive && '!text-white')
                            }
                          >
                            <MdAdd size={20} />
                            Cadastrar Produtos
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                )}
              </SidebarLinkGroup>
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/dashboard' || pathname.includes('dashboard')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="/dashboard"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/dashboard' ||
                            pathname.includes('dashboard')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <MdOutlineDashboard size={18} />
                        Dashboard
                        <MdOutlineKeyboardArrowDown
                          size={20}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                        />
                      </NavLink>
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/dashboard"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              <MdOutlineShoppingCart size={20} />
                              Minha Loja
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <li>
                <NavLink
                  to="/pdv"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('pdv') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <FaShoppingCart size={20} />
                  PDV
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('settings') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <MdSettings size={20} />
                  Settings
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
