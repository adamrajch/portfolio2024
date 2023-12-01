import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Education({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("education");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="education">
      <h2 className="font-bold text-3xl mb-2">Education</h2>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Northwestern University</h3>
        <p className="font-light leading-7 mb-6">
          <span className="font-bold text-brand capitalize">
            Full stack web development bootcamp
          </span>
          {", "}
          Chicago, Illinois
        </p>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">
          Northern Illinois University
        </h3>
        <p className="font-light leading-7 mb-6"></p>
        <p className="font-light text-white/80">
          <span className="font-bold text-brand">BS Kinesiology</span>
          {", "}
          DeKalb, Illinois
        </p>
      </Card>
    </section>
  );
}
