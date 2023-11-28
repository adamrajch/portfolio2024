import Card from "../../utilities/Card";

export default function Contact() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Contact</h3>
      <p className="font-light leading-7 mb-6">
        The best way to contact me is through email or LinkedIn. Reach me here:
      </p>
      <p className="font-light leading-7">
        Email:{" "}
        <a
          href="mailto:arajchwald@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          arajchwald@gmail.com
        </a>
      </p>
      <p className="font-light leading-7">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/adamrajchwald/"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          @adamrajchwald
        </a>
      </p>
    </Card>
  );
}
