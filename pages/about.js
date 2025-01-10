import { styled } from "../stitches.config";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { parseISO, format, intervalToDuration } from "date-fns";
import Base from "../layouts/Base";
import Toast from "../components/Toast";
import stripHtml from "../lib/strip-html";
import items from "../data/about";

export async function getStaticProps() {
  const meta = {
    title: "About // Samuel Ironkwe",
    description: "All about me",
    tagline: "Create. Share. Repeat.",
    image: "/static/images/samuel.jpg",
    primaryColor: "pink",
    secondaryColor: "purple",
  };

  return { props: meta };
}

function About(props) {
  const { title, description, image } = props;
  const [toastTitle, setToastTitle] = React.useState("");
  const [toastDescription, setToastDescription] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <img
            alt="Samuel"
            src="/static/images/samuel.jpg"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: "16px",
              "@bp2": { marginTop: "-6px" },
            }}
          >
            <strong>Hey, I'm Samuel Ironkwe </strong>I am a{" "}
            <strong>full-stack developer</strong> focused on building impactful web applications.
          </Paragraph>
          <Paragraph>
            I previously worked as a developer intern at Prodigy Education where I contributed to API endpoints supporting over 150k concurrent users and implemented UI components using React and TypeScript. I'm currently working on Traftics, a user behavior analytics tool, while exploring new opportunities in software development. <strong>Check out</strong> my work at{" "}
            <a href="/github.com/SamIron0" target="_blank">
              github.com/SamIron0
            </a>{" "}
            💻✨
          </Paragraph>
          <Paragraph>
            When I'm not coding, I enjoy hitting the gym, watching movies, and working on{" "}
            <strong>side projects</strong> in the JavaScript ecosystem.
          </Paragraph>
        </Section>
      </Container>
    );
  };

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), "LLL yyyy")}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), "LLL yyyy")
                : "Present"}
            </span>
          </p>
        </div>
      );
    });
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://samuel.pro/about" property="og:url" />
        <meta content={`https://samuel.pro${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Career</h2>
      {renderAll()}

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@bp2": { flexDirection: "row" },
});

const Paragraph = styled("p", {
  "@bp2": { margin: "15px 0" },
});


const Section = styled("div", {
  marginTop: "0px",
  width: "auto",
  "@bp2": { width: "48%" },
});

About.Layout = Base;

export default About;
