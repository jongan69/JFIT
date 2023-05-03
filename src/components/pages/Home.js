import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import home from '../../assets/home.mp4'

function Home() {
  const [, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Styles.Wrapper>
      <Styles.Hero>Welcome to JFIT</Styles.Hero>
      <Styles.Video autoPlay loop muted>
        <source src={home} type='video/mp4' />
      </Styles.Video>
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    ${'' /* background-color: #eeeeee; */}
    height: 100vh;
    align-items: center;
    justify-content:center;
    z-index: 1;
  `,
  Hero: styled.p`
    font-size: 50px;
    z-index: 2;
    padding: 5px;
  `,
  Video: styled.video`
    z-index: -10;
    width: 50%;
    height: 50%;
    padding: 5px;
  `
};

export default Home;
