import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

const SideBarBtn = ({ name, icon, link }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link to={link}>
      <button
        className={`flex flex-row items-center text-xl px-2 py-2  w-full gap-2 my-2 rounded hover:bg-green-50 hover:text-green-700 dark:hover:bg-[color:var(--ternary-dark-color)] dark:hover:text-[color:var(--primary-color)] ${
          isActive &&
          " bg-green-50 text-green-700 dark:bg-[color:var(--ternary-dark-color)] dark:text-[color:var(--primary-color)] "
        } `}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </button>
    </Link>
  );
};

export default SideBarBtn;
