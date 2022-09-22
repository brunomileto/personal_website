import { ActionButton } from "../../../components/ActionButton";

export function Hero() {
  return (
    <section id="hero">
      <main className="flex flex-col gap-6 md:py-12 lg:py-20 lg:pl-20 xl:py-28 xl:pl-80">
        <div>
          <span className="text-sm md:text-base font-mono text-accent">
            Hello, my name is
          </span>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-title">
            Bruno Mileto.
          </h1>
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-subTitleLight/60">
            I build things for the web.
          </h1>
        </div>
        <div className="lg:max-w-xl xl:max-w-2xl h-fit">
          <span className="text-subTitleLight/50 leading-8">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </span>
        </div>
        <div className="py-4">
          <ActionButton buttonText="Check out my course!" paddingY="py-4" />
        </div>
      </main>
    </section>
  );
}
