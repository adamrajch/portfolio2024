import { Dispatch, SetStateAction } from "react";
import Education from "./Education";
import Work from "./Work";
import Misc from "./misc/Misc";

export default function Right({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="grid-span-1">
      <Work setSection={setSection} />
      {/* <Projects setSection={setSection} /> */}
      <Education setSection={setSection} />
      <Misc setSection={setSection} />
    </div>
  );
}
