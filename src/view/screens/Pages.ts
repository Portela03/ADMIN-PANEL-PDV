import { lazy } from 'react';

const CustomerList = lazy(() =>
  import('./Customer/Customer').then((module) => ({
    default: module.CustomerList,
  })),
);

const CustomerCreate = lazy(() =>
  import('./Customer/Customer').then((module) => ({
    default: module.CustomerCreate,
  })),
);

const SellerList = lazy(() =>
  import('./Seller/Seller').then((module) => ({
    default: module.SellerList,
  })),
);

const SellerCreate = lazy(() =>
  import('./Seller/Seller').then((module) => ({
    default: module.SellerCreate,
  })),
);

const ProductList = lazy(() =>
  import('./Product/Product').then((module) => ({
    default: module.ProductList,
  })),
);

const ProductCreate = lazy(() =>
  import('./Product/Product').then((module) => ({
    default: module.ProductCreate,
  })),
);

const PDV = lazy(() =>
  import('./PDV/PDV').then((module) => ({
    default: module.PDV,
  })),
);

const ECommerce = lazy(() => import('./Dashboard/ECommerce'));

const Profile = lazy(() => import('./Profile/Profile'));

const Settings = lazy(() => import('./Settings/Settings'));

export {
  CustomerList,
  CustomerCreate,
  SellerList,
  SellerCreate,
  ProductList,
  ProductCreate,
  PDV,
  ECommerce,
  Profile,
  Settings,
};
