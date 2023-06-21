import Header from '../organizms/Header/Header';
import s from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <div className={s.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;