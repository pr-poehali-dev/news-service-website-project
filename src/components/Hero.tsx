import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Badge variant="destructive" className="bg-secondary text-secondary-foreground animate-pulse">
                <Icon name="Radio" size={14} className="mr-1" />
                LIVE
              </Badge>
              <span className="text-sm font-medium">Прямой эфир</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight font-display">
              Федеральная служба центральных новостей
            </h1>
            
            <p className="text-lg opacity-90 leading-relaxed">
              Документальные расследования и резонансные репортажи. Координируем деятельность всех структурных властей на территории страны и за рубежом.
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                Президент
              </Badge>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                Политика
              </Badge>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                Международное СМИ
              </Badge>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/files/fc4b86e5-e22b-47b6-b20a-3fa07854fba4.png" 
              alt="Спецрепортаж LIVE" 
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
