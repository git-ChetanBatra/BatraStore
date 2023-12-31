import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>About!</h2>
            <div className="underline"></div>
          </div>
          <p>
            "Welcome to BatraStore, where style meets individuality. We
            pride ourselves on offering curated collections and bespoke
            furniture, transforming spaces into reflections of personal taste.
            Our commitment to quality craftsmanship and unique designs ensures
            each piece is a statement of luxury and comfort. With a passion for
            home aesthetics, we strive to inspire and elevate your living
            experience. Explore our diverse range, tailor your choices, and let
            BatraStore be the key to unlocking your home's true
            potential."
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
