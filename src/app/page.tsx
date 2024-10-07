import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
