import { ArrowLeftOutlined } from "@ant-design/icons";
import { CommentOutlined } from "@ant-design/icons";
import { MessageOutlined } from "@ant-design/icons";
import MyButton from "../../atoms/Button/MyButton";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.headers}>
      <div className={s.headers__item}>
        <MyButton className={"primary"}>
          <ArrowLeftOutlined />
        </MyButton>
        <p>Назад</p>
      </div>
      <p>Профиль</p>
      <div className={s.headers__item}>
        <MyButton className={"active"}><CommentOutlined style={{color: "#fff"}}/></MyButton>
        <MyButton className={"active"}><MessageOutlined style={{color: "#fff"}}/></MyButton>
      </div>
    </div>
  );
};

export default Header;
