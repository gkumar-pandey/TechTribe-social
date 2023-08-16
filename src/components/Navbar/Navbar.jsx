import React from "react";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import Avatar from "../Avatar/Avatar";
import Container from "../Container/Container";
import styles from "./navbar.module.css";
import { useAuth } from "../../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currUserState } = useAuth();

  return (
    <>
      <nav className={styles.nav}>
        <Container>
          <div className="flex items-center justify-between py-2">
            <div className={styles.logo}>
              <h1>TechTribe</h1>
            </div>
            <div className="flex items-center">
              {/* <BsFillSunFill className=" text-3xl mx-5 " /> */}
              <Link to={`/profile/${currUserState?._id}`}>
                <Avatar
                  image={currUserState?.profileImage}
                  alt={currUserState?.firstName}
                />
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
