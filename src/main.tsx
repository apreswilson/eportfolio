import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageLayout from './layouts/page/page-layout.tsx';
import App from './App.tsx';
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <App />
      </PageLayout>
    )
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
