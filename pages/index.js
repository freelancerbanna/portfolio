import Head from "next/head";
import { MainContainer } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hasanul Haque Banna | Fullstack Web Developer</title>
        <meta
          name="description"
          content="Hasanul Haque Banna as well Freelancer Banna a Fullstack Javascript and Python Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer />
    </div>
  );
}
