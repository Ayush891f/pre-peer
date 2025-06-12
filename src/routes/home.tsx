import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Container>
        <div className="my-8">
          <h2 className="text-4xl text-center md:text-left md:text-6xl leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 font-extrabold md:text-8xl">
              Pre-Peer
            </span>
            <span className="text-gray-300 font-bold block mt-2">
              — Your Smartest Edge in Cracking Interviews
            </span>
            <br />
            Master the Art of Interviews
          </h2>

          <p className="mt-6 text-gray-400 text-md md:text-lg max-w-2xl">
            Supercharge your prep with AI-driven feedback. Practice smarter, gain confidence, and unlock better offers—faster.
          </p>
        </div>

        <div className="flex w-full flex-col md:flex-row items-center justify-evenly gap-12 py-12">
          <p className="text-4xl font-bold text-yellow-400 text-center">
            250k+
            <span className="block text-xl text-gray-400 font-medium">
              Offers Received
            </span>
          </p>
          <p className="text-4xl font-bold text-yellow-400 text-center">
            1.2M+
            <span className="block text-xl text-gray-400 font-medium">
              Interviews Aced
            </span>
          </p>
        </div>

        {/* image section */}
       <div className="w-full flex justify-center mt-10 relative group">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 border-4 border-cyan-400 group-hover:shadow-[0_0_50px_15px_rgba(0,255,255,0.4)] group-hover:scale-105 group-hover:rotate-1">

    <img
      src="/assets/img/hero.jpg"
      alt="Hero"
      className="w-[90vw] max-w-5xl h-auto object-cover opacity-90 transition-all duration-700 ease-in-out group-hover:brightness-110 group-hover:saturate-150"
    />

    {/* Copilot Tag */}
    <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/30 backdrop-blur-lg text-black font-semibold shadow-md">
      Interview Copilot&copy;
    </div>

    {/* Developer Button Inside Image */}
    <div className="absolute bottom-6 right-6 w-80 px-6 py-6 rounded-xl bg-gradient-to-br from-black/50 to-gray-900/60 backdrop-blur-lg shadow-xl transition-all duration-700 transform group-hover:scale-105 group-hover:-rotate-1">
      <h2 className="text-white font-semibold text-lg tracking-wide">Developer</h2>
      <p className="text-sm text-gray-300 mt-2 leading-relaxed">
        Let AI analyze your responses and offer smart feedback to elevate your next interview.
      </p>

      <Button className="mt-4 bg-purple-600 hover:bg-pink-700 transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(255,0,144,0.5)]">
        Generate <Sparkles className="ml-2" />
      </Button>
    </div>
  </div>
</div>

      </Container>

      {/* marquee section */}
  <div className="w-full my-16">
  <Marquee pauseOnHover speed={50}>
    <div className="flex items-center space-x-40 px-6">
      {[
        { href: "https://firebase.google.com/", img: "/assets/img/logo/firebase.png", name: "Firebase" },
        { href: "https://meet.google.com/", img: "/assets/img/logo/meet.png", name: "Google Meet" },
        { href: "https://zoom.us/", img: "/assets/img/logo/zoom.png", name: "Zoom" },
        { href: "https://www.microsoft.com/", img: "/assets/img/logo/microsoft.png", name: "Microsoft" },
        { href: "https://tailwindcss.com/", img: "/assets/img/logo/tailwindcss.png", name: "Tailwind CSS" }
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center group"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-40 h-40 object-contain transition duration-500 ease-in-out group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          />
          <span className="mt-2 text-base text-white opacity-0 group-hover:opacity-100 transition duration-300">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  </Marquee>
</div>


      <Container className="py-16 space-y-10">
  <h2 className="text-3xl md:text-4xl tracking-wider text-white font-extrabold text-center animate-fade-in-up">
    Unlock Your Interview Superpower with Personalized AI Insights with our other services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
    <div className="col-span-1 md:col-span-3">
      <div className="relative group">
        <img
          src="/assets/img/office.jpg"
          alt="Office"
          className="w-full max-h-[28rem] rounded-3xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-180 "
        />
        <div className="absolute bottom-4 left-4 bg-black/40 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
          AI Office Simulation
        </div>
      </div>
    </div>

    <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-cyan-500/30">
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        Transform your resume. Build confidence and stand out in today's job market with AI-powered resume builder.
      </p>

      <Link to="/generate" className="w-full mt-8">
        <Button className="w-full md:w-3/4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg transition-transform duration-300 transform hover:scale-110 hover:shadow-xl">
          Build Resume <Sparkles className="ml-2" />
        </Button>
      </Link>
    </div>
  </div>
</Container>

    </div>
  );
};

export default HomePage;
