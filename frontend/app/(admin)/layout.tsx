import { CustomSidebar } from "@/components/customsidebar";
import { SidebarBody, SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="admin-container">

      <div className="admin-content">
        <SidebarProvider>
          
          <CustomSidebar>
            <main className="w-full h-full">
              {children}
            </main> 
          </CustomSidebar>

        
        </SidebarProvider>
      </div>
    </section>
  );
}