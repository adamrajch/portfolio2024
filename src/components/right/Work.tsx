import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Work({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("work");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="work">
      <h2 className="font-bold text-3xl mb-2">Work</h2>
      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Full Stack Web Developer</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="https://www.impactmybiz.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Impact Networking
          </a>{" "}
          • Full-Time • Sept 2022 - Now
        </p>
        <p className="font-light mb-4 text-white/80">Chicago, Illinois</p>
        {/* CONTENT */}
        <p className="font-light leading-7 mb-4">
          Lead the dev team to transition their tech stack from WordPress to
          React, NextJS, and Strapi. I also lead the development of
          Impact&apos;s internal marketing site at{" "}
          <a
            href="https://www.impactmybiz.com"
            target="_blank"
            rel="noreferrer"
            className="text-brand"
          >
            www.impactmybiz.com
          </a>
          .
        </p>
        <p className="font-light leading-7">
          Presented best practices for the React and NextJS ecosystem regarding
          migrations, composition, and code conventions. I was able to migrate
          thousands of blogs and case studies from the old site to cut billable
          hours spent by the interal team by 300%. Lead all internal tool
          development and internal sites like the careers portal and e-commerce
          site.
        </p>
      </Card>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Full Stack Web Developer</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="https://www.steersman.works/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Steersman Company
          </a>{" "}
          • Full-Time • March 2021 - Sept 2022
        </p>
        <p className="font-light mb-4 text-white/80">Deerfield, Illinois</p>
        {/* CONTENT */}

        <p className="font-light leading-7 mb-4">
          Developed e-commerce based API with NextJS and python using Odoo ERP.
          Worked on multiple frontends for different clients, mainly
          manufacturing companies with a big e-commerce catalog. Created a chat
          plugin to intergrate with the ERP so companies&apos; sales team can
          chat live with prospective users
        </p>
      </Card>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Web Developer</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="https://www.impactmybiz.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Divine Design and Marketing
          </a>{" "}
          • Full-Time • March 2019 - March 2021
        </p>

        {/* CONTENT */}
        <p className="font-light leading-7">
          React/Next JS, WordPress development for various manufacturing clients
        </p>
      </Card>
      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Fullstack Web/Mobile Developer</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="https://www.impactmybiz.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Freelance
          </a>{" "}
          • Jan 2018 - March 2022
        </p>

        {/* CONTENT */}
        <p className="font-light leading-7">
          Next JS, React, React Native Apps
        </p>
      </Card>
    </section>
  );
}
