import { Linkedin } from "lucide-react";
import { team } from "@/lib/about-content";

function Member({ person }: { person: (typeof team)[number] }) {
  return (
    <article>
      <img
        src={person.image}
        alt=""
        className={`aspect-[280/296] w-full object-cover ${
          person.focus === "bottom" ? "object-bottom" : "object-center"
        }`}
      />
      <h3 className="mt-6 text-2xl tracking-[-0.6px] text-[#0e0e0e]">{person.name}</h3>
      <p className="mt-1 font-display text-sm uppercase leading-6 tracking-[0.7px] text-[#252e09]">
        {person.role}
      </p>
      {person.linkedIn ? (
        <a
          href={person.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex text-[#0e0e0e] transition-opacity hover:opacity-70"
          aria-label={`${person.name} on LinkedIn`}
        >
          <Linkedin className="h-6 w-6" aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}

export function AboutTeam() {
  const main = team.slice(0, 12);
  const last = team.slice(12);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <h2 className="text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]">
          Our Team
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {main.map((person) => (
            <Member key={person.name} person={person} />
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-8">
          {last.map((person) => (
            <div key={person.name} className="lg:w-[280px]">
              <Member person={person} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
