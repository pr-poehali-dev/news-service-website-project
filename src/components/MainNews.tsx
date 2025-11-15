import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const MainNews = () => {
  const mainStory = {
    category: "Президент",
    title: "Глава государства провел совещание с руководством федеральных органов",
    description: "Обсуждены ключевые вопросы национального развития и координации деятельности структурных властей на всех территориях страны",
    image: "https://cdn.poehali.dev/files/c4729f12-1703-4e4a-85e9-e0ac84f12bb6.png",
    time: "2 часа назад",
  };

  const sideStories = [
    {
      category: "События",
      title: "Федеральная пресс-служба представила годовой отчет",
      time: "3 часа назад",
      icon: "FileText",
    },
    {
      category: "Репортажи",
      title: "Документальное расследование: новые подробности",
      time: "5 часов назад",
      icon: "Video",
    },
    {
      category: "Расследования",
      title: "Резонансный материал о международном взаимодействии",
      time: "6 часов назад",
      icon: "Search",
    },
    {
      category: "Политика",
      title: "Координация деятельности властей: итоги недели",
      time: "8 часов назад",
      icon: "Building2",
    },
  ];

  return (
    <section id="news" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-8 bg-secondary"></div>
          <h2 className="text-3xl font-bold font-display">Главные новости</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="relative h-96 overflow-hidden">
              <img 
                src={mainStory.image} 
                alt={mainStory.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-secondary text-secondary-foreground font-bold">
                  {mainStory.category}
                </Badge>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-display">{mainStory.title}</h3>
                <p className="text-sm opacity-90 mb-3">{mainStory.description}</p>
                <div className="flex items-center text-xs opacity-75">
                  <Icon name="Clock" size={14} className="mr-1" />
                  {mainStory.time}
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            {sideStories.map((story, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {story.category}
                    </Badge>
                    <Icon name={story.icon as any} size={18} className="text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base leading-tight">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-xs mt-2">
                    <Icon name="Clock" size={12} className="mr-1" />
                    {story.time}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
