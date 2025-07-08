import Link from "next/link";

function Home() {
  return (
    <div className="container mx-auto flex max-w-xl flex-col gap-8 px-4 py-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          This is a motherfucking website.
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          and it's fucking perfect.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          Seriously, what the fuck else do you want?
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          You probably build websites and think your shit is special. You think
          your 13 megabyte parallax-ative home page is going to get you some
          fucking Awwwards banner can glue to the top corner of your site. You
          think your 40-pound jQuery file and 83 polyfills give IE7 a boner
          because it finally has box-shadow. Wrong, motherfucker. Let ne
          describe your perfect-ass website:
        </p>
        <ul className="text-muted-foreground ml-8 list-disc text-sm leading-tight tracking-tight text-pretty">
          <li>Shit's lightweight and loads fast</li>
          <li>Fits on all your shitty screens</li>
          <li>Looks the same in all your shitty browsers</li>
          <li>
            The motherfucker's accessible to every asshole that visits your site
          </li>
          <li>
            Shit's legible and gets your fucking point across (if you had one
            instead of just 5mb pics of hipsters drinking coffee)
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          Well guess what, motherfucker:
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          You. Are. Over-designing. Look at this shit. It's a motherfucking
          website. Why the fuck do you need to animate a fucking trendy-ass
          banner flag when i hover over that useless piece of shit? You spent
          hours on it and added 80 kilobytes to your fucking site, and some
          motherfucker jabbing at it on their iPad with fat sausage fingers will
          never see that shit. Not to mention blind people will never see that
          shit, but they don't see any of your shitty shit.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          It's fucking lightweight
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          This entire page weight less than the gradient-meshed facebook logo on
          your fucking Wordpress site. Did you seriously load 100kb of jQuery UI
          just so you could animate the fucking color of a div? You loaded all 7
          fontfaces of a shitty webfont just so you could say "Hi." at 100px
          height at the beginning of your site? You piece of shit.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          It's responsive
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          You dumbass. You throught you needed media queries to be responsive,
          but no. Responsive means that it responds to whatever motherfucking
          screensize it's viewed on. This site doesn't care if you're on an iMac
          or a motherfucking Tamagotchi.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          It fucking works
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          Look at this shit. You can read it ... that is, if you can read,
          motherfucker. It makes sense. It has motherfucking hierarchy. It's
          using <span className="font-semibold text-foreground">"npx create-next-app"</span> so
          you and your bitch-ass browser know what the fuck's in this fucking
          site. That's semantics, motherfucker.
        </p>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          It has content on the fucking screen. Your site has three bylines and
          link to your dribble account, but you spread it over 7 full screens
          and make me click some bobbing button to shot me how cool the jQuery
          ScrollTo plugin is.
        </p>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          Cross browser compatibility? Load this motherfucker in IE6. I fucking
          dare you.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          This is a website. Look at it. You've never seen one before.
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          Like the man who's never grown out his beard has no idea what his true
          natural state is, you have no fucking idea what a website is. All you
          have seen are shitty skeuomorphic bastardizations of what should be
          text communicating a fucking message. This is a real, naked website.
          Look at it. It's fucking beautiful.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          Yes, this is fucking satire, you fuck!
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          I'm not actually saying your shitty site should look like this. What
          I'm saying is that all the problems we have with websites are{" "}
          <span className="font-semibold text-foreground">ones we create ourselves.</span>{" "}
          Websites aren't broken by default, they are functional,
          high-performing, and accessible. You break them. You son-of-a-bitch.
        </p>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          "Good design is as little design as possible." - some Asian
          motherfucker
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-lg leading-tight font-bold tracking-tight text-balance">
          Let's make an impact together
        </h2>
        <p className="text-muted-foreground text-sm leading-tight tracking-tight text-pretty">
          I'm making cool shit that performs. Create the extraordinary. No shortcuts, just bold, precision-engineered work that elevates the game & leaves a mark. <Link href="mailto:akbarerde@gmail.com" target="_blank" className="text-primary font-semibold">Click here</Link> motherfucker!
        </p>
      </div>
    </div>
  );
}

export default Home;
