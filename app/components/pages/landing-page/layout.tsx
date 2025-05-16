import Navbar from "@/app/components/components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-2">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
