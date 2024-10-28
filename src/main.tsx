import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PageLayout from './layouts/page/page-layout.tsx';
import App from './App.tsx';
import './index.scss';
import Artifacts from './pages/artifacts/artifacts.tsx';
import Contact from './pages/contact/contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <App />
      </PageLayout>
    )
  },
  {
    path: "/artifacts",
    element: (
      <PageLayout>
        <Artifacts />
      </PageLayout>
    )
  },
  {
    path: "/contact",
    element: (
      <PageLayout>
        <Contact />
      </PageLayout>
    )
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
