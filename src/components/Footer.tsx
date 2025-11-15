import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const sections = [
    {
      title: "Разделы",
      links: [
        { text: "Новости", path: "#" },
        { text: "События", path: "#" },
        { text: "Репортажи", path: "#" },
        { text: "Президент", path: "#" },
        { text: "Расследования", path: "#" },
      ],
    },
    {
      title: "О нас",
      links: [
        { text: "О пресс-службе", path: "#" },
        { text: "Контакты", path: "#" },
        { text: "Аккредитация", path: "#" },
        { text: "Правила", path: "#" },
      ],
    },
    {
      title: "Сервисы",
      links: [
        { text: "Архив", path: "#" },
        { text: "Подписка", path: "/subscription" },
        { text: "Мобильное приложение", path: "#" },
        { text: "RSS", path: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/59bed381-9a6f-494c-b7ec-6e67d6179682.png" 
                alt="Герб РФ" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg font-display">ГЛАВНЫЕ НОВОСТИ</h3>
                <p className="text-xs opacity-75">Федеральная пресс-служба</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Координируем деятельность всех структурных властей. Национальное СМИ международного формата.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 font-display">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.path} 
                      onClick={(e) => {
                        if (link.path.startsWith('/')) {
                          e.preventDefault();
                          navigate(link.path);
                        }
                      }}
                      className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity cursor-pointer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-75">
              <p>© 2024 Федеральная пресс-служба центральных новостей</p>
              <p className="mt-1">presidentnewsmainevents@gmail.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <Icon name="Share2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;