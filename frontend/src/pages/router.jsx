import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import EntryPage from './EntryPage';
import ItemDetail from './ItemDetail';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <EntryPage/> },
      { path: '/ItemDetail', element: <ItemDetail/> },
    ],
  },
]);

export default router;
