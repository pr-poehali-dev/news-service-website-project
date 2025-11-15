import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LiveSection = () => {
  const liveEvents = [
    {
      title: "Пресс-конференция Президента",
      viewers: "124K",
      status: "LIVE",
    },
    {
      title: "Заседание правительства",
      viewers: "89K",
      status: "LIVE",
    },
    {
      title: "Международный форум",
      viewers: "56K",
      status: "UPCOMING",
    },
  ];

  const categories = [
    { name: "Президент", count: 156, icon: "Crown" },
    { name: "События", count: 243, icon: "Calendar" },
    { name: "Репортажи", count: 187, icon: "Video" },
    { name: "Расследования", count: 94, icon: "Search" },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-8 bg-secondary"></div>
              <h2 className="text-3xl font-bold font-display">Прямые эфиры</h2>
            </div>

            <div className="space-y-4">
              {liveEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                            <Icon name="Radio" size={28} className="text-white" />
                          </div>
                          {event.status === "LIVE" && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge 
                              variant={event.status === "LIVE" ? "destructive" : "outline"}
                              className={event.status === "LIVE" ? "bg-secondary" : ""}
                            >
                              {event.status === "LIVE" ? "LIVE" : "Скоро"}
                            </Badge>
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Icon name="Eye" size={14} className="mr-1" />
                              {event.viewers}
                            </span>
                          </div>
                          <h3 className="font-bold text-lg">{event.title}</h3>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <Icon name="Play" size={20} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-8 bg-accent"></div>
              <h2 className="text-2xl font-bold font-display">Разделы</h2>
            </div>

            <div className="space-y-3">
              {categories.map((category, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md hover:border-primary transition-all">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={category.icon as any} size={20} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{category.name}</CardTitle>
                          <p className="text-xs text-muted-foreground">{category.count} материалов</p>
                        </div>
                      </div>
                      <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Icon name="Bell" size={20} />
                  <span>Подписка на новости</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm opacity-90 mb-4">
                  Получайте важные события и срочные новости первыми
                </p>
                <Button variant="secondary" className="w-full">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSection;
