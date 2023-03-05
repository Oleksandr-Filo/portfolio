import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';

const Projects = lazy(() => import('../scenes/Projects/Projects'));

export const routes = {
  PROJECTS: '/portfolio',
  PROJECT: '/portfolio/:id',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
      </Routes>

      {background && (
        <Routes>
          <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;
