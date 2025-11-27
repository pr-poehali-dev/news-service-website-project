import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { label: "Новости", href: "#news" },
    { label: "События", href: "#events" },
    { label: "Репортажи", href: "#reports" },
    { label: "Президент", href: "#president" },
    { label: "Расследования", href: "#investigations" },
    { label: "Реестр сотрудников", href: "/employee-registry", isRoute: true },
    { label: "М. Нефёдов", href: "/mikhail-nefedov", isRoute: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/59bed381-9a6f-494c-b7ec-6e67d6179682.png" 
                alt="Герб РФ" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold leading-tight font-display">
                  ГЛАВНЫЕ НОВОСТИ
                </h1>
                <p className="text-xs opacity-90">Федеральная пресс-служба</p>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.isRoute) {
                    e.preventDefault();
                    navigate(item.href);
                  }
                }}
                className="px-4 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Icon name="Bell" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate("/admin")}
            >
              <Icon name="Shield" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;