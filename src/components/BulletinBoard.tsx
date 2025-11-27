import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BulletinBoard = () => {
  const announcements = [
    {
      id: 1,
      title: "Открыта аккредитация на Петербургский экономический форум",
      category: "Аккредитация",
      date: "25 ноября 2025",
      urgent: true,
      icon: "Award",
    },
    {
      id: 2,
      title: "Приглашаем на пресс-конференцию МИД России",
      category: "Мероприятия",
      date: "28 ноября 2025",
      urgent: false,
      icon: "Calendar",
    },
    {
      id: 3,
      title: "Требуются журналисты для освещения визита делегации",
      category: "Вакансии",
      date: "1 декабря 2025",
      urgent: true,
      icon: "Briefcase",
    },
    {
      id: 4,
      title: "Обновлены правила аккредитации в Кремле",
      category: "Важное",
      date: "20 ноября 2025",
      urgent: false,
      icon: "FileText",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <Icon name="MessageSquare" size={32} className="text-primary" />
              Доска объявлений
            </h2>
            <p className="text-muted-foreground mt-2">
              Актуальные объявления для аккредитованных журналистов
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map((announcement) => (
            <Card
              key={announcement.id}
              className="p-6 hover:shadow-lg transition-all cursor-pointer border-l-4 border-l-primary"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={announcement.icon as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{announcement.category}</Badge>
                    {announcement.urgent && (
                      <Badge variant="destructive" className="gap-1">
                        <Icon name="AlertCircle" size={12} />
                        Срочно
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {announcement.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {announcement.date}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center">
          <Icon name="Info" size={24} className="mx-auto mb-3 text-primary" />
          <p className="text-muted-foreground">
            Доска объявлений доступна только для аккредитованных сотрудников
            федеральной пресс-службы
          </p>
        </div>
      </div>
    </section>
  );
};

export default BulletinBoard;
