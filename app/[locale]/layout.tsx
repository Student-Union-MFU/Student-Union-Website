import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { NavigationData } from "@/mockdata";

export default function PublicLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="public-container">

      <div className="public-content pt-10 box-border">

        <Navbar 
          heading={ NavigationData.heading } 
          subHeading={ NavigationData.subHeading } 
          logo={ NavigationData.logo } 
          linkItems={ NavigationData.linkItems } />
          
        {children} 

        <Footer />
      
      </div>
    </section>
  );
}