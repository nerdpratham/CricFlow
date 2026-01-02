import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to <span className="text-cyan-400">Cricflow</span>
        </h1>
      </main>

      <Footer />
    </div>
  );
}
