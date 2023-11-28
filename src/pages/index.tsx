import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Clouds from "../components/effects/Clouds";
import Moon from "../components/effects/Moon";
import Stars from "../components/effects/Stars";
import Waves from "../components/effects/Waves";
import Left from "../components/left/Left";
import Right from "../components/right/Right";

const Home: NextPage = () => {
  const [section, setSection] = useState("work");

  return (
    <div id="homescreen" className="relative">
      <Head>
        <title>Adam Rajchwald</title>
        <meta name="description" content="This is my portfolio :D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Moon />
      <Clouds />
      <Stars />
      <Waves />
      <div className="w-full h-full relative p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2">
        <Left section={section} />
        <Right setSection={setSection} />
      </div>
    </div>
  );
};

export default Home;
