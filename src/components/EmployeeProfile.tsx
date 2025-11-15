import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  views: number;
  status: "published" | "draft" | "review";
}

const EmployeeProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const employee = {
    registryNumber: "РН-2024-007823",
    name: "Иванова Мария Александровна",
    position: "Корреспондент-аналитик",
    department: "Отдел президентских новостей",
    email: "m.ivanova@pressnews.ru",
    phone: "+7 (495) 123-45-67",
    registrationDate: "15.03.2022",
    accreditation: "Постоянная",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  };

  const [resume, setResume] = useState({
    experience: "8 лет в журналистике, специализация: политические события, международные отношения",
    education: "МГУ им. М.В. Ломоносова, факультет журналистики",
    awards: "Лауреат премии 'Золотое перо' 2023",
    skills: "Репортажная съемка, интервьюирование, аналитика",
  });

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "Президент провел встречу с министрами",
      content: "Сегодня состоялась важная встреча...",
      category: "Президент",
      date: "2024-11-14",
      views: 12500,
      status: "published",
    },
    {
      id: "2",
      title: "Аккредитация на международный форум",
      content: "Получена аккредитация для освещения...",
      category: "События",
      date: "2024-11-13",
      views: 8400,
      status: "published",
    },
    {
      id: "3",
      title: "Подготовка к пресс-конференции",
      content: "В процессе подготовки материалов...",
      category: "Репортажи",
      date: "2024-11-15",
      views: 0,
      status: "draft",
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "Новости",
  });

  const handlePublishPost = () => {
    if (newPost.title && newPost.content) {
      const post: Post = {
        id: Date.now().toString(),
        title: newPost.title,
        content: newPost.content,
        category: newPost.category,
        date: new Date().toISOString().split("T")[0],
        views: 0,
        status: "review",
      };
      setPosts([post, ...posts]);
      setNewPost({ title: "", content: "", category: "Новости" });
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { text: string; variant: any }> = {
      published: { text: "Опубликовано", variant: "default" },
      draft: { text: "Черновик", variant: "secondary" },
      review: { text: "На модерации", variant: "outline" },
    };
    return variants[status];
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-6">
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
            <div className="flex items-center space-x-6">
              <Avatar className="w-24 h-24 border-4 border-primary-foreground/20">
                <AvatarImage src={employee.avatar} />
                <AvatarFallback>{employee.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold font-display">{employee.name}</h1>
                  <Badge variant="secondary" className="text-sm">
                    <Icon name="ShieldCheck" size={14} className="mr-1" />
                    Аккредитован
                  </Badge>
                </div>
                <p className="text-lg opacity-90">{employee.position}</p>
                <p className="text-sm opacity-75">{employee.department}</p>
                <div className="flex items-center space-x-4 mt-3">
                  <span className="text-sm font-mono bg-primary-foreground/20 px-3 py-1 rounded">
                    {employee.registryNumber}
                  </span>
                  <span className="text-sm opacity-75">
                    В реестре с {employee.registrationDate}
                  </span>
                </div>
              </div>
            </div>
            
            <Button
              variant="secondary"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Icon name={isEditing ? "X" : "Edit"} size={18} className="mr-2" />
              {isEditing ? "Отмена" : "Редактировать"}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="posts" className="space-x-2">
              <Icon name="FileText" size={18} />
              <span>Мои публикации</span>
            </TabsTrigger>
            <TabsTrigger value="new-post" className="space-x-2">
              <Icon name="PlusCircle" size={18} />
              <span>Новая публикация</span>
            </TabsTrigger>
            <TabsTrigger value="resume" className="space-x-2">
              <Icon name="User" size={18} />
              <span>Резюме</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="space-x-2">
              <Icon name="Phone" size={18} />
              <span>Контакты</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Все публикации ({posts.length})</span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Eye" size={16} />
                    <span>Всего просмотров: {posts.reduce((sum, p) => sum + p.views, 0)}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <Badge {...getStatusBadge(post.status)}>{getStatusBadge(post.status).text}</Badge>
                            <span className="text-xs text-muted-foreground">{post.date}</span>
                          </div>
                          <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          {post.status === "published" && (
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Icon name="Eye" size={14} className="mr-1" />
                              {post.views}
                            </div>
                          )}
                          <Button variant="ghost" size="sm">
                            <Icon name="MoreVertical" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="new-post">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="PlusCircle" size={24} className="text-primary" />
                  <span>Создать новую публикацию</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category">Категория</Label>
                  <select
                    id="category"
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option>Новости</option>
                    <option>Президент</option>
                    <option>События</option>
                    <option>Репортажи</option>
                    <option>Расследования</option>
                    <option>Международные отношения</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="title">Заголовок публикации</Label>
                  <Input
                    id="title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="Введите заголовок..."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="content">Содержание</Label>
                  <Textarea
                    id="content"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Напишите текст публикации..."
                    rows={12}
                    className="mt-1"
                  />
                </div>

                <Card className="bg-muted">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Info" size={20} className="text-primary mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold mb-1">Правила публикации:</p>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Все публикации проходят модерацию перед размещением</li>
                          <li>• Материалы должны соответствовать стандартам журналистики</li>
                          <li>• После одобрения публикация появится в общей ленте новостей</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-3">
                  <Button onClick={handlePublishPost} className="flex-1">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить на модерацию
                  </Button>
                  <Button variant="outline" onClick={() => setNewPost({ title: "", content: "", category: "Новости" })}>
                    <Icon name="Save" size={18} className="mr-2" />
                    Сохранить черновик
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resume">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="User" size={24} className="text-primary" />
                  <span>Профессиональное резюме</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="experience">Опыт работы</Label>
                  <Textarea
                    id="experience"
                    value={resume.experience}
                    onChange={(e) => setResume({ ...resume, experience: e.target.value })}
                    disabled={!isEditing}
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="education">Образование</Label>
                  <Input
                    id="education"
                    value={resume.education}
                    onChange={(e) => setResume({ ...resume, education: e.target.value })}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="awards">Награды и достижения</Label>
                  <Textarea
                    id="awards"
                    value={resume.awards}
                    onChange={(e) => setResume({ ...resume, awards: e.target.value })}
                    disabled={!isEditing}
                    rows={2}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="skills">Профессиональные навыки</Label>
                  <Textarea
                    id="skills"
                    value={resume.skills}
                    onChange={(e) => setResume({ ...resume, skills: e.target.value })}
                    disabled={!isEditing}
                    rows={2}
                    className="mt-1"
                  />
                </div>

                {isEditing && (
                  <Button className="w-full">
                    <Icon name="Save" size={18} className="mr-2" />
                    Сохранить изменения
                  </Button>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <span>Контактная информация</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Mail" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{employee.email}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Phone" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-medium">{employee.phone}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Building2" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Отдел</p>
                        <p className="font-medium">{employee.department}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="BadgeCheck" size={24} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Аккредитация</p>
                        <p className="font-medium">{employee.accreditation}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="FileKey" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Реестровый номер сотрудника</h3>
                        <p className="text-2xl font-mono mb-2">{employee.registryNumber}</p>
                        <p className="text-sm opacity-90">
                          Используйте этот номер для подтверждения полномочий при аккредитации на мероприятия
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployeeProfile;
