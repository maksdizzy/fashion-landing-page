import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { SocialProof } from "./components/SocialProof";
import { ProblemAgitation } from "./components/ProblemAgitation";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemAgitation />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
