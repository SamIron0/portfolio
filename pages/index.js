import { styled } from "../stitches.config";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShortcutHome from "../components/ShortcutHome";
import { PostMain, PostContent, PostContainer } from "../components/Post";
import { Wrapper } from "../components/Wrapper";
export async function getStaticProps() {
  return {
    props: {
      title: "Samuel Ironkwe",
      description:
        "Obsessed with solving real problems and building awesome things",
      image: "/static/images/samuel.jpg",
    },
  };
}

export default function Index(props) {
  const { title, description, image } = props;

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://ironkwe.site" property="og:url" />
        <meta content={`https://ironkwe.site/${image}`} property="og:image" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B26F3B1N2E"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                 window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-B26F3B1N2E');
              `,
          }}
        ></script>
      </Head>

      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <h1>{title}</h1>
              <p>
                <strong>Software Developer</strong>
                <br />  
                Currently building{" "}
                <a href="https://remeal.xyz" target="blank">
                  Remeal
                </a>
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  );
}

const Home = styled(PostMain, {
  alignItems: "center",
  display: "flex",
  margin: "0 auto",
  "@bp2": { width: 800 },
});
