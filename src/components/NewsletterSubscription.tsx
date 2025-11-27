import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Спасибо за подписку!",
      description: "Вы будете получать главные новости на указанный email",
    });
    setEmail("");
  };

  return (
    <section className="py-12 bg-gradient-to-b from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto p-8 bg-white/95 backdrop-blur">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
              <Icon name="Mail" size={32} className="text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Подписка на главные события
            </h2>
            <p className="text-muted-foreground">
              Получайте актуальные новости Президента и федеральные события первыми
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Ваш email адрес"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
            />
            <Button type="submit" size="lg" className="h-12 px-8">
              <Icon name="Send" size={18} className="mr-2" />
              Подписаться
            </Button>
          </form>

          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="CheckCircle" size={16} className="text-green-600" />
              <span>1.2М+ подписчиков</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Shield" size={16} className="text-blue-600" />
              <span>Без спама</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
