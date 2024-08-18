import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import {
  CustomerCreate,
  CustomerList,
} from './view/screens/Customer/Customer';
import { SellerCreate, SellerList } from './view/screens/Seller/Seller';
import { ProductCreate, ProductList } from './view/screens/Product/Product';
import { PDV } from './view/screens/PDV/PDV';
import { DefaultLayout } from './view/layout/DefaultLayout';
import { Loader } from './view/components/Loader';
import ECommerce from './view/screens/Dashboard/ECommerce';
import Profile from './view/screens/Profile/Profile';
import Settings from './view/screens/Settings/Settings';
import PageTitle from './view/components/PageTitle/PageTitle';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) <Loader />;

  return (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Cliente | Moça Bonita" />
              <CustomerList />
            </>
          }
        />
        <Route
          path="/clientes/criar"
          element={
            <>
              <PageTitle title="Cliente - Criar | Moça Bonita" />
              <CustomerCreate />
            </>
          }
        />
        <Route
          path="/vendedor"
          element={
            <>
              <PageTitle title="Vendedor | Moça Bonita" />
              <SellerList />
            </>
          }
        />
        <Route
          path="/vendedor/criar"
          element={
            <>
              <PageTitle title="Vendedor - Criar | Moça Bonita" />
              <SellerCreate />
            </>
          }
        />
        <Route
          path="/produtos"
          element={
            <>
              <PageTitle title="Produtos | Moça Bonita" />
              <ProductList />
            </>
          }
        />
        <Route
          path="/produtos/criar"
          element={
            <>
              <PageTitle title="Produtos - Criar | Moça Bonita" />
              <ProductCreate />
            </>
          }
        />
        <Route
          path="/pdv"
          element={
            <>
              <PageTitle title="PDV | Moça Bonita" />
              <PDV />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | Moça Bonita" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Perfil | Moça Bonita" />
              <Profile />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Configurações | Moça Bonita" />
              <Settings />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
