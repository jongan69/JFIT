import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function Education() {
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
        <Styles.Hero>Education</Styles.Hero>
      </Styles.Column>

      <Styles.Column>
        <Styles.Text>
          Education / Course Material Here
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
    font-size: 50px;
    padding: 10px;
  `,
  Text: styled.p`
    font-size: 25px;
  `
};

export default Education;
