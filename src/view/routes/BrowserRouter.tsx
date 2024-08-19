import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Loader } from '../components/Loader';
import {
  CustomerCreate,
  CustomerList,
  ECommerce,
  PDV,
  ProductCreate,
  ProductList,
  Profile,
  SellerCreate,
  SellerList,
  Settings,
} from '../screens/Pages';

export function BrowserRouter() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
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
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
