import Links from "./Links";

export default function Hero({ section }: { section: string }) {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <h1 className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black">
        Hey, I&apos;m
        <br />
        Adam<span className="text-brand">.</span>
      </h1>
      <div className="flex items-center justify-start my-8">
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://github.com/adamrajch", "_blank");
            }}
            src="/github.svg"
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/adamrajchwald/",
                "_blank"
              );
            }}
            src="/linkedin.svg"
          />
        </div>
        <div className="transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("mailto:arajchwald@gmail.com");
            }}
            src="/google.svg"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <p className="font-light leading-7">
        I&apos;m a professional fullstack software engineer based in Chicago,
        Illinois. I love working with{" "}
        <span className="text-brand font-bold hover:underline">
          React / NextJS, AI, and emerging technologies
        </span>{" "}
        . When I am not coding I train and compete in armwrestling and cycling
        races. I am currently learning Go and working on a fitness marketplace
        side project.
      </p>
      <Links section={section} />
    </div>
  );
}
