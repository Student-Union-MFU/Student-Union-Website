import Footer from "@/components/footer";

export default function PublicLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section className="public-container">

      <div className="public-content">

        {children} 

        <Footer />
      
      </div>
    </section>
  );
}