import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { toast } = useToast();

  const pendingPublications = [
    {
      id: 1,
      title: "Новая инициатива Правительства по поддержке регионов",
      author: "Иван Петров",
      registryNumber: "РН-2024-002341",
      date: "27 ноября 2025",
      category: "Политика",
      status: "На модерации",
    },
    {
      id: 2,
      title: "Репортаж с заседания Госдумы",
      author: "Елена Сидорова",
      registryNumber: "РН-2024-003122",
      date: "27 ноября 2025",
      category: "Парламент",
      status: "На модерации",
    },
    {
      id: 3,
      title: "Интервью с представителем МИД России",
      author: "Михаил Нефёдов",
      registryNumber: "РН-2024-001001",
      date: "26 ноября 2025",
      category: "Международное",
      status: "На модерации",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Открыта аккредитация на Петербургский экономический форум",
      category: "Аккредитация",
      date: "25 ноября 2025",
      status: "Активно",
      urgent: true,
    },
    {
      id: 2,
      title: "Приглашаем на пресс-конференцию МИД России",
      category: "Мероприятия",
      date: "28 ноября 2025",
      status: "Активно",
      urgent: false,
    },
  ];

  const employees = [
    {
      id: 1,
      name: "Михаил Нефёдов",
      registryNumber: "РН-2024-001001",
      position: "Директор и главный редактор",
      publications: 24,
      status: "Активен",
      accredited: true,
    },
    {
      id: 2,
      name: "Иван Петров",
      registryNumber: "РН-2024-002341",
      position: "Старший корреспондент",
      publications: 18,
      status: "Активен",
      accredited: true,
    },
    {
      id: 3,
      name: "Елена Сидорова",
      registryNumber: "РН-2024-003122",
      position: "Корреспондент",
      publications: 12,
      status: "Активен",
      accredited: true,
    },
  ];

  const handleApprovePublication = (id: number) => {
    toast({
      title: "Публикация одобрена",
      description: "Статья успешно опубликована на сайте",
    });
  };

  const handleRejectPublication = (id: number) => {
    toast({
      title: "Публикация отклонена",
      description: "Автор получит уведомление о необходимости доработки",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground flex items-center gap-3">
              <Icon name="Shield" size={40} className="text-primary" />
              Админ-панель
            </h1>
            <p className="text-muted-foreground mt-2">
              Управление публикациями, объявлениями и сотрудниками
            </p>
          </div>
          <Badge className="bg-primary text-lg px-4 py-2">
            <Icon name="Crown" size={18} className="mr-2" />
            Администратор
          </Badge>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Icon name="LayoutDashboard" size={18} />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="moderation" className="flex items-center gap-2">
              <Icon name="FileCheck" size={18} />
              Модерация
              <Badge variant="destructive" className="ml-1">
                {pendingPublications.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="announcements" className="flex items-center gap-2">
              <Icon name="MessageSquare" size={18} />
              Объявления
            </TabsTrigger>
            <TabsTrigger value="employees" className="flex items-center gap-2">
              <Icon name="Users" size={18} />
              Сотрудники
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Icon name="BarChart" size={18} />
              Аналитика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="FileText" size={32} className="text-primary" />
                  <Badge variant="secondary">Сегодня +5</Badge>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {pendingPublications.length}
                </div>
                <div className="text-muted-foreground">На модерации</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="CheckCircle" size={32} className="text-green-600" />
                  <Badge variant="outline">За неделю</Badge>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">142</div>
                <div className="text-muted-foreground">Одобрено</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Users" size={32} className="text-accent" />
                  <Badge variant="outline">Активных</Badge>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {employees.length}
                </div>
                <div className="text-muted-foreground">Сотрудников</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon name="Eye" size={32} className="text-secondary" />
                  <Badge variant="outline">За месяц</Badge>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">1.2M</div>
                <div className="text-muted-foreground">Просмотров</div>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                Последняя активность
              </h2>
              <div className="space-y-3">
                {[
                  {
                    action: "Опубликована статья",
                    user: "Иван Петров",
                    time: "5 минут назад",
                  },
                  {
                    action: "Новое объявление",
                    user: "Система",
                    time: "15 минут назад",
                  },
                  {
                    action: "Аккредитация подтверждена",
                    user: "Елена Сидорова",
                    time: "1 час назад",
                  },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.user}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="moderation" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Публикации на модерации</h2>
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Категория" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все категории</SelectItem>
                    <SelectItem value="politics">Политика</SelectItem>
                    <SelectItem value="economy">Экономика</SelectItem>
                    <SelectItem value="international">Международное</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              {pendingPublications.map((pub) => (
                <Card key={pub.id} className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{pub.category}</Badge>
                        <Badge className="bg-yellow-600">{pub.status}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={14} />
                          {pub.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Hash" size={14} />
                          {pub.registryNumber}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {pub.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={() => handleApprovePublication(pub.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Icon name="Check" size={18} className="mr-2" />
                        Одобрить
                      </Button>
                      <Button
                        onClick={() => handleRejectPublication(pub.id)}
                        variant="destructive"
                      >
                        <Icon name="X" size={18} className="mr-2" />
                        Отклонить
                      </Button>
                      <Button variant="outline">
                        <Icon name="Eye" size={18} className="mr-2" />
                        Просмотр
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Управление объявлениями</h2>
              <Button>
                <Icon name="Plus" size={18} className="mr-2" />
                Создать объявление
              </Button>
            </div>

            <Card className="p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Новое объявление</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Заголовок
                  </label>
                  <Input placeholder="Введите заголовок объявления" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Категория
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="accreditation">Аккредитация</SelectItem>
                      <SelectItem value="events">Мероприятия</SelectItem>
                      <SelectItem value="vacancies">Вакансии</SelectItem>
                      <SelectItem value="important">Важное</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Текст</label>
                  <Textarea
                    placeholder="Введите текст объявления"
                    rows={4}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="urgent" className="rounded" />
                  <label htmlFor="urgent" className="text-sm font-medium">
                    Пометить как срочное
                  </label>
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Опубликовать объявление
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Активные объявления</h3>
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{announcement.category}</Badge>
                        {announcement.urgent && (
                          <Badge variant="destructive">Срочно</Badge>
                        )}
                        <Badge className="bg-green-600">
                          {announcement.status}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">
                        {announcement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {announcement.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Edit" size={16} className="mr-1" />
                        Изменить
                      </Button>
                      <Button variant="destructive" size="sm">
                        <Icon name="Trash2" size={16} className="mr-1" />
                        Удалить
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="employees" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Управление сотрудниками</h2>
              <Button>
                <Icon name="UserPlus" size={18} className="mr-2" />
                Добавить сотрудника
              </Button>
            </div>

            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Сотрудник</TableHead>
                    <TableHead>Реестровый номер</TableHead>
                    <TableHead>Должность</TableHead>
                    <TableHead>Публикации</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">
                        {employee.name}
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {employee.registryNumber}
                      </TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.publications}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            employee.status === "Активен" ? "default" : "outline"
                          }
                          className={
                            employee.status === "Активен" ? "bg-green-600" : ""
                          }
                        >
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Edit" size={14} />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Аналитика и статистика</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <Icon
                  name="FileText"
                  size={32}
                  className="text-primary mb-3"
                />
                <div className="text-3xl font-bold mb-1">248</div>
                <div className="text-muted-foreground mb-3">
                  Публикаций за месяц
                </div>
                <div className="text-sm text-green-600">+18% к прошлому месяцу</div>
              </Card>

              <Card className="p-6">
                <Icon name="Users" size={32} className="text-accent mb-3" />
                <div className="text-3xl font-bold mb-1">1.2M</div>
                <div className="text-muted-foreground mb-3">
                  Уникальных посетителей
                </div>
                <div className="text-sm text-green-600">+24% к прошлому месяцу</div>
              </Card>

              <Card className="p-6">
                <Icon name="Eye" size={32} className="text-secondary mb-3" />
                <div className="text-3xl font-bold mb-1">3.8M</div>
                <div className="text-muted-foreground mb-3">
                  Просмотров страниц
                </div>
                <div className="text-sm text-green-600">+31% к прошлому месяцу</div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Топ авторов</h3>
              <div className="space-y-3">
                {employees.map((employee, index) => (
                  <div
                    key={employee.id}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {employee.position}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">
                      {employee.publications} публикаций
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;
