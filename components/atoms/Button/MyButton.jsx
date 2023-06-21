import s from './Button.module.scss';

const MyButton = ({children, className, ...props}) => {
  const custum_style = `${s.default} ${className}`
  return (
    <button className={custum_style} {...props}>
      {children}
    </button>
  );
};

export default MyButton;