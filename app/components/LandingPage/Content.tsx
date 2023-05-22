import { styled } from "styled-components";
import LinkedInLogo from "../../images/linkedin.png";
import Image from "next/image";

const ContentWrapper = styled.section(() => ({
  maxWidth: "75%",
}));

const Nav = styled.nav(() => ({
  marginBottom: "40px",
  display: 'flex',
  justifyContent: 'space-between'
}));

const NavLink = styled.a(() => ({
    marginRight: '5px',
}))

const Title = styled.h1(() => ({
  color: "#92e2df",
  fontWeight: 300,
  fontSize: "1.7rem",
  fontFamily: "sans-serif",
}));

const SubTitle = styled.div(() => ({
  fontFamily: "sans-serif",
  fontWeight: 400,
  fontSize: "1.8rem",
  color: "#b0b0a9",
}));

const Info = styled.p(() => ({
  marginTop: "10px",
  fontFamily: "sans-serif",
  letterSpacing: 0.4,
  fontWeight: 60,
  fontSize: "1.1rem",
  color: "#B9B9B1",
}));

export default function Content() {
  return (
    <ContentWrapper>
      <Nav>
        <Title>Deepak S M</Title>
        <div>
        <NavLink href="https://www.linkedin.com/in/s-m-deepak/" target="_blank">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"linkedin.png"}
            alt="linkedin profile"
            height={30}
            width={30}
          />
        </NavLink>
        <NavLink href="https://www.github.com/virtualdesigner/" target="_blank">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"github.png"}
            alt="github profile"
            height={30}
            width={30}
          />
        </NavLink>
        <NavLink href="https://medium.com/@smvirtualdesigner" target="_blank">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={"medium.png"}
            alt="medium profile"
            height={30}
            width={30}
          />
        </NavLink>
        </div>
      </Nav>
      <SubTitle>About</SubTitle>
      <Info>
        I&rsquo;m interested in being a force behind humanity&rsquo;s progress. Progress, to me, is proportional to clarity & fulfillment in people&rsquo;s life.
        <br />I want us to live our lives fully, by flowering in
        our own way and enable others to do the same.
        <br></br>
        <br></br>
        My career as a Software Engineer had started when I was 18 Y/O when it
        dawned upon me that all I needed to learn Software Engineering and to
        land a job, is just a computer with internet connection.
        <br></br>Nowadays, my spare time goes into learning the
        Mathematical foundations for AGI research.
        <br></br>
        <br></br>
        I like to read books, write poems and be with nature.
      </Info>
    </ContentWrapper>
  );
}
