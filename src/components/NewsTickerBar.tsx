import { AlertCircle } from "lucide-react";

const NewsTickerBar = () => {
  const urgentNews = [
    "Президент РФ провёл встречу с главами регионов по вопросам развития инфраструктуры",
    "Федеральная пресс-служба: новые меры поддержки малого бизнеса вступают в силу",
    "Минэкономразвития прогнозирует рост ВВП на 2,8% в текущем году",
    "Открыт новый пресс-центр для аккредитованных журналистов в Москве",
    "Важное заявление МИД России по международным отношениям",
  ];

  const tickerContent = urgentNews.join(" • ");

  return (
    <div className="bg-secondary text-white overflow-hidden border-b-2 border-secondary/20">
      <div className="container mx-auto px-4 py-2 flex items-center">
        <div className="flex items-center space-x-2 mr-4 flex-shrink-0">
          <AlertCircle className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm uppercase tracking-wide">
            Срочные новости
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="inline-block pr-8">{tickerContent}</span>
            <span className="inline-block pr-8">{tickerContent}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTickerBar;
