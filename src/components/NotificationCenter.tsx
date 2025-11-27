import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

interface Notification {
  id: number;
  type: "approved" | "rejected" | "pending" | "info";
  title: string;
  message: string;
  publicationTitle?: string;
  date: string;
  read: boolean;
}

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "approved",
      title: "Публикация одобрена",
      message: "Ваша статья успешно прошла модерацию и опубликована",
      publicationTitle: "Интервью с представителем МИД России",
      date: "27 ноября 2025, 14:30",
      read: false,
    },
    {
      id: 2,
      type: "rejected",
      title: "Публикация требует доработки",
      message:
        "Модератор запросил внесение изменений перед публикацией. Необходимо уточнить источники информации.",
      publicationTitle: "Анализ экономической ситуации",
      date: "26 ноября 2025, 18:45",
      read: false,
    },
    {
      id: 3,
      type: "pending",
      title: "Публикация на модерации",
      message: "Ваша статья отправлена на проверку модератору",
      publicationTitle: "Репортаж с заседания Госдумы",
      date: "26 ноября 2025, 10:15",
      read: true,
    },
    {
      id: 4,
      type: "info",
      title: "Новое объявление",
      message: "Открыта аккредитация на Петербургский экономический форум",
      date: "25 ноября 2025, 12:00",
      read: true,
    },
    {
      id: 5,
      type: "approved",
      title: "Публикация одобрена",
      message: "Ваша статья успешно прошла модерацию и опубликована",
      publicationTitle: "Эксклюзивное интервью с министром",
      date: "24 ноября 2025, 16:20",
      read: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "approved":
        return { name: "CheckCircle", color: "text-green-600" };
      case "rejected":
        return { name: "XCircle", color: "text-red-600" };
      case "pending":
        return { name: "Clock", color: "text-yellow-600" };
      case "info":
        return { name: "Info", color: "text-blue-600" };
      default:
        return { name: "Bell", color: "text-gray-600" };
    }
  };

  const getNotificationBadge = (type: Notification["type"]) => {
    switch (type) {
      case "approved":
        return (
          <Badge className="bg-green-600">Одобрено</Badge>
        );
      case "rejected":
        return <Badge variant="destructive">Отклонено</Badge>;
      case "pending":
        return <Badge className="bg-yellow-600">На модерации</Badge>;
      case "info":
        return <Badge variant="outline">Информация</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Icon name="Bell" size={28} className="text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Уведомления</h2>
              {unreadCount > 0 && (
                <p className="text-sm text-muted-foreground">
                  {unreadCount} непрочитанных
                </p>
              )}
            </div>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              <Icon name="CheckCheck" size={16} className="mr-2" />
              Прочитать все
            </Button>
          )}
        </div>

        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-3">
            {notifications.map((notification) => {
              const iconInfo = getNotificationIcon(notification.type);
              return (
                <Card
                  key={notification.id}
                  className={`p-4 transition-all cursor-pointer hover:shadow-md ${
                    !notification.read ? "bg-primary/5 border-l-4 border-l-primary" : ""
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          notification.read ? "bg-muted" : "bg-primary/10"
                        }`}
                      >
                        <Icon
                          name={iconInfo.name as any}
                          size={20}
                          className={iconInfo.color}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground">
                          {notification.title}
                        </h3>
                        {getNotificationBadge(notification.type)}
                      </div>
                      {notification.publicationTitle && (
                        <p className="text-sm font-medium text-primary mb-1">
                          {notification.publicationTitle}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Icon name="Clock" size={12} />
                          {notification.date}
                        </span>
                        {!notification.read && (
                          <Badge variant="secondary" className="text-xs">
                            Новое
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </ScrollArea>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Inbox"
              size={64}
              className="mx-auto mb-4 text-muted-foreground opacity-50"
            />
            <p className="text-muted-foreground">Уведомлений пока нет</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default NotificationCenter;
