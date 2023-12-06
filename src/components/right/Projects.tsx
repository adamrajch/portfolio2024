import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Projects({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  const [vidOne, setVidOne] = useState(false);
  const [vidTwo, setVidTwo] = useState(false);
  const [vidThree, setVidThree] = useState(false);

  useEffect(() => {
    inView && setSection("projects");
  }, [inView, setSection]);

  const renderTags = (tech: string[]) => {
    return (
      <div className="flex flex-wrap items-center justify-start -mb-2">
        {tech.map((tag) => {
          return (
            <span
              className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-2">Projects</h2>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Impact Networking</h3>
          <div>
            <a
              href="https://www.impactmybiz.com"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          New and improved marketing site, migrating to NextJS and Strapi. The
          site is performant and SEO optimized and is statically generated. 60+
          marketing pages and 1000+ blog and insight pages.
        </p>
        {renderTags([
          "React (Next JS)",
          "Typescript",
          "Strapi CMS",
          "Node",
          "Postgres",
          "Framer Motion",
          "SASS",
        ])}
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">AI Embeddings Chat</h3>
          <div>
            <a
              href="https://ai-vectors-2k3k.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          AI project to demonstrate usage of OpenAI, Pinecone, and Vercel AI.
          Chat with AI that queries relevant data via vector embeddings
        </p>
        {renderTags([
          "React (Next JS)",
          "Typescript",
          "Node",
          "MongoDB",
          "OpenAI",
          "Pinecone",
          "Prisma",
        ])}
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Periodize</h3>
          <div>
            <p className="text-brand font-semibold">coming soon</p>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          Fitness marketplace and training analytics. Create and subscribe to
          detailed and structured training programs guided by exercise science
          principles and methodologies.
        </p>
        {renderTags([
          "React (Next JS)",
          "PWA",
          "Typescript",
          "RXDB",
          "Node",
          "Hasura",
          "GraphQL",
        ])}
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Obed Bikes</h3>
          <div>
            <a
              href="https://obedbikes.com/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          Frontend and chat plugin API
        </p>
        {renderTags(["Python", "React"])}
      </Card>
    </section>
  );
}
