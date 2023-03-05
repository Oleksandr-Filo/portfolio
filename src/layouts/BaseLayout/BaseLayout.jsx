import s from './BaseLayout.module.scss';
import Particles from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';

const BaseLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Particles />

      <div className={s.container}>{children}</div>

      <Footer />
    </div>
  );
};

export default BaseLayout;
