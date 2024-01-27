import Topnav from "@/components/Topnav";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Topnav />

      <Searchbar />
    </main>
  );
}
