import React from "react";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";
import Base from "../layouts/Base";
import FeaturedProject from "../components/FeaturedProject";
import { FeaturedProjects } from "../components/FeaturedProjects";
import stripHtml from "../lib/strip-html";
import items from "../data/projects";

export async function getStaticProps() {
  const meta = {
    title: "Projects // Samuel Ironkwe",
    tagline: "Work. Hobby. Open Source.",
    image: "/static/images/samuel.jpg",
    primaryColor: "cyan",
    secondaryColor: "green",
  };

  return { props: meta };
}

function Projects(props) {
  const renderFeatured = () => {
    const featured = ["Remeal", "Scrapify", "Pizza App", "Facial Recognition"];

    return items
      .map((item) => {
        return item.projects.filter((project) =>
          featured.includes(project.title)
        );
      })
      .filter((item) => {
        if (item.length > 0) {
          return item;
        }
      })
      .flat()
      .map((item, index) => {
        return <FeaturedProject key={index} project={item} />;
      });
  };

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, pIndex) => {
              return <ProjectItem key={pIndex} project={project} />;
            })}
          </ul>
        </div>
      );
    });
  };

  const getTotalProjects = () => {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      total = total + items[i].projects.length;
    }

    return total;
  };

  const { title, image } = props;
  const description = `I'm obsessed with taking on new projects and <strong>building web applications</strong>. Here you can navigate to <strong>${getTotalProjects()} different</strong> websites and apps that I built.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://ironkwe.site/projects" property="og:url" />
        <meta content={`https://ironkwe.site${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>All Projects</h2>
        <FeaturedProjects>{renderFeatured()}</FeaturedProjects>
      </AnimateSharedLayout>
    </>
  );
}

function ProjectItem(props) {
  const { project } = props;

  return (
    <li>
      <a href={project.url} target="_blank">
        {project.title}
      </a>
    </li>
  );
}

Projects.Layout = Base;

export default Projects;
