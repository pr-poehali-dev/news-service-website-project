import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const LiveBroadcasts = () => {
  const liveStreams = [
    {
      id: 1,
      title: "Брифинг МИД России",
      viewers: "12.4K",
      thumbnail: "https://cdn.poehali.dev/files/59bed381-9a6f-494c-b7ec-6e67d6179682.png",
      category: "Политика",
    },
    {
      id: 2,
      title: "Заседание Правительства РФ",
      viewers: "8.9K",
      thumbnail: "https://cdn.poehali.dev/files/59bed381-9a6f-494c-b7ec-6e67d6179682.png",
      category: "Экономика",
    },
    {
      id: 3,
      title: "Пресс-конференция Президента",
      viewers: "45.2K",
      thumbnail: "https://cdn.poehali.dev/files/59bed381-9a6f-494c-b7ec-6e67d6179682.png",
      category: "Главное",
    },
  ];

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
            Прямые эфиры
          </h2>
          <Badge variant="secondary" className="gap-1">
            <Icon name="Radio" size={14} />
            {liveStreams.length} активных
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream) => (
            <Card
              key={stream.id}
              className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={stream.thumbnail}
                  alt={stream.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-secondary text-white gap-1 animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    LIVE
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  {stream.viewers}
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon
                    name="Play"
                    size={48}
                    className="text-white drop-shadow-lg"
                  />
                </div>
              </div>
              <div className="p-4">
                <Badge variant="outline" className="mb-2 text-xs">
                  {stream.category}
                </Badge>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {stream.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveBroadcasts;
