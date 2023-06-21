import s from "./Sidebar.module.scss";
import { Avatar } from "antd";
import Profile from "../../../assets/avatar.png";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.avatar}>
      <Avatar src={Profile.src} style={{ width: "96px", height: "96px", border: " 1px solid #1E1584" }} />
      <div className={s.user}>
        <h3>Мария Иванова, 21 год</h3>
        <p>официант</p>
      </div>
      </div>
      <div>
        <h4 className={s.level}>1 уровень | 1346</h4>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Sidebar;
