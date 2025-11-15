import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BreakingNews = () => {
  const breakingNews = [
    "Координация деятельности структурных властей: новые решения",
    "Международный формат взаимодействия расширен",
    "Пресс-центр СМИ РФ: важное заявление",
  ];

  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-4">
          <Badge className="bg-accent text-accent-foreground font-bold px-3 py-1 flex-shrink-0">
            <Icon name="Zap" size={14} className="mr-1" />
            СРОЧНО
          </Badge>
          <div className="overflow-hidden flex-1">
            <div className="animate-marquee whitespace-nowrap">
              {breakingNews.map((news, index) => (
                <span key={index} className="inline-block mx-8 font-medium">
                  • {news}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
