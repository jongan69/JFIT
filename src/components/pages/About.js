import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function About() {
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
      <Styles.Column>
        <Styles.Hero>About</Styles.Hero>
      </Styles.Column>

      <Styles.Column>
        <Styles.Text>
        Our health and fitness website was founded with a single goal in mind: to help people live healthier, happier lives. Our team of experts is comprised of certified nutritionists, personal trainers, and health coaches who are passionate about helping others achieve their wellness goals. 
        We believe that everyone deserves to live a healthy, active lifestyle, and we are committed to providing the resources and support you need to achieve that goal. Whether you are just getting started on your fitness journey or you are a seasoned athlete, we are here to help you every step of the way.
        </Styles.Text>
      </Styles.Column>
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    height: 100vh;
    align-items: center;
    justify-content:center;
  `,
  Column: styled.div`
    flex: 50%;
  `,
  Hero: styled.h1`
    font-size: 40px;
    padding: 10px;
  `,
  Text: styled.p`
    font-size: 14px;
  `
};

export default About;
