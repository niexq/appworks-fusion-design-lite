import { IRouterConfig, lazy } from 'ice';
import UserLayout from '@/layouts/UserLayout';
import BasicLayout from '@/layouts/BasicLayout';
import LoginWrapperPage from '@/components/LoginWrapperPage';

// const Login = lazy(() => import('@/pages/Login'));
const Login = lazy(() =>
  import(/* webpackChunkName: 'user-login' */ '@/pages/Login')
);
const Dashboard = lazy(() =>
  import(/* webpackChunkName: 'dashboard' */ '@/pages/Dashboard')
);
const FusionMutilcolTable = lazy(() => 
  import(/* webpackChunkName: 'table-mutilcol' */ '@/pages/FusionMutilcolTable')
);
const FusionDialogTable = lazy(() => 
  import(/* webpackChunkName: 'table-dialog' */ '@/pages/FusionDialogTable')
);


const routerConfig: IRouterConfig[] = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      { path: '/login', component: Login },
      { path: '/', redirect: '/user/login' },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    wrappers: [LoginWrapperPage],
    children: [
      { path: '/table/dialog', component: FusionDialogTable },
      { path: '/table/mutilcol', component: FusionMutilcolTable },
      { path: '/dashboard', component: Dashboard },
      { path: '/', redirect: '/dashboard' },
    ],
  },
];

export default routerConfig;
