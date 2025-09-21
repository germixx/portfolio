import Header from '/components/FrontPage/Header';
import Hero from '/components/FrontPage/Hero';
import About from '/components/FrontPage/About';
import Projects from '/components/FrontPage/Projects';
import Contact from '/components/FrontPage/Contact';
import Footer from '/components/FrontPage/Footer';

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="pt-16">
        <Hero />
        <About />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
