import Card from "../../utilities/Card";

export default function Tech() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Tech Stack</h3>
      <p className="font-light leading-7 mb-2">
        My choice tech stack for personal projects is GENERALLY (but not
        always):
      </p>
      <ul className="mb-4 grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• React (Next JS)</li>
        <li className="font-light leading-7">• React Native</li>
        <li className="font-light leading-7">• Typescript</li>
        <li className="font-light leading-7">• Node</li>
        <li className="font-light leading-7">• Express</li>
        <li className="font-light leading-7">• Postgres</li>
        <li className="font-light leading-7">• Redis</li>
        <li className="font-light leading-7">
          • Firebase (whole suite of tools)
        </li>
        <li className="font-light leading-7">• Vercel</li>
        <li className="font-light leading-7">• AWS</li>
      </ul>
      <p className="font-light leading-7 mb-2">
        Some other tech that I love and/or have built at scale with:
      </p>
      <ul className="grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• Python</li>
        <li className="font-light leading-7">• AI / Vector Embeddings</li>
        <li className="font-light leading-7">• PHP</li>
        <li className="font-light leading-7">• MongoDB</li>
        <li className="font-light leading-7">• MySQL</li>
        <li className="font-light leading-7">
          • Headless CMS (Strapi, Payload )
        </li>
      </ul>
    </Card>
  );
}
