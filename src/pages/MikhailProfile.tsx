import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const MikhailProfile = () => {
  const [activeTab, setActiveTab] = useState("publications");

  const profileData = {
    name: "Михаил Нефёдов",
    position: "Директор и главный редактор новостей",
    registryNumber: "РН-2024-001001",
    email: "presidentnewsmainevents@gmail.com",
    phone: "+7 900 903-12-11",
    location: "Москва, Россия 109012",
    instagram: "@news24cmi",
    telegram: "presidentnewsmaineventsfederal",
    status: "Активен",
    department: "Федеральная Пресс-служба",
  };

  const publications = [
    {
      id: 1,
      title: "Президент РФ утвердил новую стратегию развития регионов",
      date: "24 ноября 2025",
      views: 45200,
      category: "Политика",
      status: "Опубликовано",
    },
    {
      id: 2,
      title: "Эксклюзивное интервью с министром экономического развития",
      date: "22 ноября 2025",
      views: 32100,
      category: "Экономика",
      status: "Опубликовано",
    },
    {
      id: 3,
      title: "Репортаж с международного экономического форума",
      date: "20 ноября 2025",
      views: 28500,
      category: "Международное",
      status: "Опубликовано",
    },
  ];

  const awards = [
    {
      title: "Почётная грамота Министерства Культуры РФ",
      year: "2024",
      icon: "Award",
    },
    {
      title: "Лауреат премии 'Лучший журналист года'",
      year: "2023",
      icon: "Trophy",
    },
    {
      title: "Благодарность от Администрации Президента РФ",
      year: "2022",
      icon: "Medal",
    },
  ];

  const accreditations = [
    {
      organization: "Администрация Президента РФ",
      date: "2024",
      link: "#",
      active: true,
    },
    {
      organization: "Государственная Дума РФ",
      date: "2024",
      link: "#",
      active: true,
    },
    {
      organization: "МИД России",
      date: "2023",
      link: "#",
      active: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Card className="p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <Avatar className="w-32 h-32 border-4 border-primary">
                <AvatarImage src="" alt={profileData.name} />
                <AvatarFallback className="text-3xl font-bold bg-primary text-white">
                  МН
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {profileData.name}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-3">
                    {profileData.position}
                  </p>
                  <Badge className="bg-primary">{profileData.department}</Badge>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <Icon name="CheckCircle" size={14} className="mr-1" />
                  {profileData.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Hash" size={18} className="text-primary" />
                  <span className="font-mono">{profileData.registryNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Instagram" size={18} className="text-primary" />
                  <span>{profileData.instagram}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Send" size={18} className="text-primary" />
                  <span>{profileData.telegram}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 h-auto">
            <TabsTrigger value="publications" className="flex items-center gap-2">
              <Icon name="FileText" size={18} />
              Публикации
            </TabsTrigger>
            <TabsTrigger value="awards" className="flex items-center gap-2">
              <Icon name="Award" size={18} />
              Награды
            </TabsTrigger>
            <TabsTrigger value="accreditation" className="flex items-center gap-2">
              <Icon name="Shield" size={18} />
              Аккредитация
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <Icon name="BarChart" size={18} />
              Статистика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="publications" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Мои публикации</h2>
              <Button>
                <Icon name="Plus" size={18} className="mr-2" />
                Новая публикация
              </Button>
            </div>
            {publications.map((pub) => (
              <Card key={pub.id} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{pub.category}</Badge>
                      <Badge className="bg-green-600">{pub.status}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {pub.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Eye" size={14} />
                        {pub.views.toLocaleString()} просмотров
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="ExternalLink" size={16} className="mr-1" />
                    Открыть
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="awards" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Награды и достижения</h2>
            <div className="grid gap-4">
              {awards.map((award, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon
                        name={award.icon as any}
                        size={24}
                        className="text-accent"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{award.title}</h3>
                      <p className="text-muted-foreground">{award.year}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accreditation" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Аккредитации</h2>
            <div className="grid gap-4">
              {accreditations.map((acc, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Icon name="Shield" size={32} className="text-primary" />
                      <div>
                        <h3 className="font-semibold text-lg">{acc.organization}</h3>
                        <p className="text-muted-foreground">
                          Аккредитация с {acc.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={acc.active ? "default" : "outline"}
                        className={acc.active ? "bg-green-600" : ""}
                      >
                        {acc.active ? "Активна" : "Истекла"}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Icon name="Link" size={16} className="mr-1" />
                        Ссылка
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Статистика</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Icon
                  name="FileText"
                  size={32}
                  className="mx-auto mb-3 text-primary"
                />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {publications.length}
                </div>
                <div className="text-muted-foreground">Всего публикаций</div>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Eye" size={32} className="mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  105.8K
                </div>
                <div className="text-muted-foreground">Просмотров</div>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Award" size={32} className="mx-auto mb-3 text-secondary" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {awards.length}
                </div>
                <div className="text-muted-foreground">Наград</div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default MikhailProfile;
