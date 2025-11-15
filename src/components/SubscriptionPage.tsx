import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const SubscriptionPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    { id: "president", label: "Заявления Президента", icon: "Crown" },
    { id: "government", label: "Решения Правительства", icon: "Building2" },
    { id: "breaking", label: "Срочные новости", icon: "AlertCircle" },
    { id: "events", label: "Официальные события", icon: "Calendar" },
    { id: "investigations", label: "Расследования", icon: "Search" },
    { id: "international", label: "Международные отношения", icon: "Globe" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <CardTitle className="text-2xl">Подписка оформлена!</CardTitle>
            <CardDescription>
              Вы успешно подписались на новости федеральной пресс-службы
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              Письмо с подтверждением отправлено на <strong>{email}</strong>
            </p>
            <Button onClick={() => window.location.href = "/"} className="w-full">
              Вернуться на главную
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/59bed381-9a6f-494c-b7ec-6e67d6179682.png" 
              alt="Герб РФ" 
              className="h-16 w-16 object-contain"
            />
            <div className="text-left text-primary-foreground">
              <h1 className="text-3xl font-bold font-display">ГЛАВНЫЕ НОВОСТИ</h1>
              <p className="text-sm opacity-90">Федеральная пресс-служба</p>
            </div>
          </div>
          <p className="text-primary-foreground/90 text-lg">
            Будьте в курсе всех важных событий и решений государственной власти
          </p>
        </div>

        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Icon name="Bell" size={24} className="text-primary" />
              <span>Подписка на рассылку</span>
            </CardTitle>
            <CardDescription>
              Выберите интересующие вас категории новостей и получайте обновления на email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email адрес</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-semibold">Выберите категории новостей</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className={`cursor-pointer transition-all ${
                        selectedCategories.includes(category.id)
                          ? "border-primary bg-primary/5"
                          : "hover:border-primary/50"
                      }`}
                      onClick={() => toggleCategory(category.id)}
                    >
                      <CardHeader className="p-4">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                          />
                          <div className="flex items-center space-x-2 flex-1">
                            <Icon name={category.icon as any} size={20} className="text-primary" />
                            <span className="font-medium">{category.label}</span>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-muted">
                <CardHeader className="p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} className="text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold mb-1">Что вы получите:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Ежедневный дайджест главных событий</li>
                        <li>• Уведомления о срочных новостях</li>
                        <li>• Анонсы прямых эфиров и пресс-конференций</li>
                        <li>• Эксклюзивные материалы для подписчиков</li>
                      </ul>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Я согласен с обработкой персональных данных и условиями рассылки
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={selectedCategories.length === 0}
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Подписаться на новости
              </Button>

              {selectedCategories.length === 0 && (
                <p className="text-sm text-center text-muted-foreground">
                  Выберите хотя бы одну категорию для продолжения
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            onClick={() => window.location.href = "/"}
            className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
