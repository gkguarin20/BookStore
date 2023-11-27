import BookDetails from '../components/BookDetails.component';
import CreateAuthor from '../components/CreateAuthor.component';
import CreateBook from '../components/CreateBook.component';
import Home from '../pages/Home';
const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/create',
    element: <CreateBook />,
  },
  {
    path: '/author',
    element: <CreateAuthor />,
  },
  {
    path: '/details',
    element: <BookDetails />,
  },
  /*   {
    path: '/edit/:id',
    element: <EditBook />,
  }, */
];

export default AppRoutes;
