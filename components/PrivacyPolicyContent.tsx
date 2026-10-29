export default function PrivacyPolicyContent() {
  return (
    <>
      {/* Page Title Section */}
      <section className="mt-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
      </section>

      {/* Content */}
      <article className="mt-8 space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-10">
        <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
          The Gamers Guild is one of the leading game development house in the
          country. The organization believes in original content creation
          thriving on work-hard-play-hard culture.
        </p>

        <div className="space-y-6 border-y border-white/10 py-6">
          <div>
            <h2 className="text-lg font-bold text-brand-orange">Perfection</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              Since Android is one of the most widely used platforms, Android
              games need to be designed to work well in various screen sizes
              and OS.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-orange">
              Proficiency
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              Our team includes the best developers of the industry who are
              constantly adapting themselves to the latest trends.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-orange">Completion</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              We provide full-scale development services for gaming apps on
              Android and Ios.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white">
            We are passionate about what we do.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            We firmly believe in the survival of the fittest in this
            challenging industry. Perfection can only be delivered by giving
            one hundred percent to a job. We are a team of committed
            professionals in love with our work.
          </p>
          <p className="text-sm font-medium text-slate-200">
            Doing what we love makes the journey towards success our reward.
          </p>
        </div>

        <div className="space-y-3 border-t border-white/10 pt-6">
          <h2 className="text-lg font-bold text-white">A growing company.</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Gamers Guild is one of the leading game development houses in the
            country. We take pride in developing world class 2D and 3D games,
            mostly ranked among top games globally.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6">
          <h2 className="text-lg font-bold text-white">
            Best User Experience Games
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
            <li>2D Games</li>
            <li>3D Games</li>
          </ul>
        </div>
      </article>
    </>
  );
}
