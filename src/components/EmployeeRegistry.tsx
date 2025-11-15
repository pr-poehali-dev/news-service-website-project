import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface Employee {
  id: string;
  registryNumber: string;
  name: string;
  position: string;
  department: string;
  avatar: string;
  publications: number;
  views: number;
  status: "active" | "vacation" | "archive";
}

const EmployeeRegistry = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");

  const employees: Employee[] = [
    {
      id: "1",
      registryNumber: "РН-2024-007823",
      name: "Иванова Мария Александровна",
      position: "Корреспондент-аналитик",
      department: "Отдел президентских новостей",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      publications: 47,
      views: 125000,
      status: "active",
    },
    {
      id: "2",
      registryNumber: "РН-2024-005412",
      name: "Петров Алексей Викторович",
      position: "Главный редактор",
      department: "Отдел международных новостей",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexey",
      publications: 89,
      views: 340000,
      status: "active",
    },
    {
      id: "3",
      registryNumber: "РН-2024-003891",
      name: "Смирнова Елена Игоревна",
      position: "Фоторепортёр",
      department: "Отдел мультимедиа",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      publications: 156,
      views: 520000,
      status: "active",
    },
    {
      id: "4",
      registryNumber: "РН-2024-008934",
      name: "Козлов Дмитрий Сергеевич",
      position: "Специальный корреспондент",
      department: "Отдел расследований",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      publications: 34,
      views: 98000,
      status: "active",
    },
    {
      id: "5",
      registryNumber: "РН-2024-002156",
      name: "Новикова Ольга Петровна",
      position: "Ведущая редактор",
      department: "Отдел правительственных новостей",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olga",
      publications: 112,
      views: 287000,
      status: "vacation",
    },
    {
      id: "6",
      registryNumber: "РН-2024-009821",
      name: "Васильев Игорь Александрович",
      position: "Видеооператор",
      department: "Отдел мультимедиа",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Igor",
      publications: 203,
      views: 670000,
      status: "active",
    },
  ];

  const departments = [
    "Все отделы",
    "Отдел президентских новостей",
    "Отдел международных новостей",
    "Отдел мультимедиа",
    "Отдел расследований",
    "Отдел правительственных новостей",
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { text: string; color: string }> = {
      active: { text: "Активен", color: "bg-green-100 text-green-700" },
      vacation: { text: "В отпуске", color: "bg-yellow-100 text-yellow-700" },
      archive: { text: "Архив", color: "bg-gray-100 text-gray-700" },
    };
    return variants[status];
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.registryNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      filterDepartment === "all" || emp.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-primary-foreground/10 mb-4"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            На главную
          </Button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold font-display mb-2">Реестр сотрудников</h1>
              <p className="text-lg opacity-90">
                Федеральная пресс-служба центральных новостей
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{employees.length}</div>
              <div className="text-sm opacity-75">аккредитованных сотрудников</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Поиск по имени или реестровому номеру
                </label>
                <div className="relative">
                  <Icon
                    name="Search"
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  />
                  <Input
                    placeholder="Введите имя или РН-2024-..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Фильтр по отделу</label>
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="all">{departments[0]}</option>
                  {departments.slice(1).map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {filteredEmployees.map((employee) => (
            <Card
              key={employee.id}
              className="hover:shadow-lg transition-all cursor-pointer"
              onClick={() => navigate("/employee-profile")}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={employee.avatar} />
                      <AvatarFallback>
                        {employee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="font-bold text-lg">{employee.name}</h3>
                        <Badge
                          className={getStatusBadge(employee.status).color}
                        >
                          {getStatusBadge(employee.status).text}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {employee.position}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center text-muted-foreground">
                          <Icon name="Building2" size={14} className="mr-1" />
                          {employee.department}
                        </span>
                        <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
                          {employee.registryNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 mr-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {employee.publications}
                      </div>
                      <div className="text-xs text-muted-foreground">публикаций</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {(employee.views / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-muted-foreground">просмотров</div>
                    </div>
                  </div>

                  <Icon name="ChevronRight" size={24} className="text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Icon name="Users" size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold mb-2">Сотрудники не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры поиска
              </p>
            </CardContent>
          </Card>
        )}

        <Card className="mt-6 bg-muted">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Info" size={20} className="text-primary" />
              <span>О реестре сотрудников</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Единый реестр сотрудников федеральной пресс-службы содержит информацию
              обо всех аккредитованных журналистах, корреспондентах и технических
              специалистах. Каждому сотруднику присваивается уникальный реестровый
              номер (РН), который используется для подтверждения полномочий при доступе
              к государственным мероприятиям и официальным источникам информации.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeRegistry;
