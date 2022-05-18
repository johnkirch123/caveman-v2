import About from 'pages/About/About';
import Collections from 'pages/Collections';
import Roadmap from 'pages/Roadmap';
import withPageTitle from './components/PageTitle';
import Cavemen from './pages/Cavemen';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LegacySFT from './pages/LegacySFT';
import Transaction from './pages/Transaction';

export const routeNames = {
  home: '/',
  dashboard: '/dashboard',
  transaction: '/transaction',
  cavemen: '/cavemen',
  legacySFT: '/legacySFT',
  roadmap: '/roadmap',
  collections: '/collections',
  about: '/about',
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect'
};

const routes: Array<any> = [
  {
    path: routeNames.cavemen,
    title: 'Cavemen',
    component: Cavemen
  },
  {
    path: routeNames.legacySFT,
    title: 'LegacySFT',
    component: LegacySFT
  },
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: routeNames.roadmap,
    title: 'Roadmap',
    component: Roadmap
  },
  {
    path: routeNames.about,
    title: 'About',
    component: About
  },
  {
    path: routeNames.collections,
    title: 'Collections',
    component: Collections
  },
  {
    path: routeNames.transaction,
    title: 'Transaction',
    component: Transaction
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Crypto Cavemen`
    : 'Crypto Cavemen';

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
