import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home';
import ProductPage from './pages/product';
import RootLayOut from './pages/Root';
const router = createBrowserRouter([
  {path:'/', element:<RootLayOut />, children:[
    {path:'/', element: <HomePage />},
    {path:'/products', element:<ProductPage />}
  ]}
])
function App() {
  return (
    <RouterProvider router={router} />
  );

}

export default App;
