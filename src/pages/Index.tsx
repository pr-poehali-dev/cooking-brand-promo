import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/0055f3c3-b722-40eb-adb4-3d57d821c226.jpg',
      title: 'Набережная Дона',
      description: 'Вид на реку на закате'
    },
    {
      url: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/203cbcf7-a4b1-4c9c-8dca-028667a6d20e.jpg',
      title: 'Большая Садовая',
      description: 'Главная улица города'
    },
    {
      url: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/d50d4995-647c-449c-afed-f527f0fa13f5.jpg',
      title: 'Левый берег',
      description: 'Современная набережная'
    },
    {
      url: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/0055f3c3-b722-40eb-adb4-3d57d821c226.jpg',
      title: 'Городская панорама',
      description: 'Архитектура центра'
    },
    {
      url: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/203cbcf7-a4b1-4c9c-8dca-028667a6d20e.jpg',
      title: 'Исторический центр',
      description: 'Улицы старого города'
    },
    {
      url: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/d50d4995-647c-449c-afed-f527f0fa13f5.jpg',
      title: 'Речная прогулка',
      description: 'Вечерняя набережная'
    }
  ];

  const routes = [
    {
      title: 'Историческая прогулка',
      duration: '2-3 часа',
      distance: '4 км',
      difficulty: 'Легко',
      highlights: ['Большая Садовая', 'Соборный переулок', 'Театральная площадь', 'Музей краеведения'],
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/203cbcf7-a4b1-4c9c-8dca-028667a6d20e.jpg'
    },
    {
      title: 'Набережная маршрут',
      duration: '1.5-2 часа',
      distance: '3 км',
      difficulty: 'Легко',
      highlights: ['Левобережная набережная', 'Мост через Дон', 'Парк Левобережный', 'Речной вокзал'],
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/d50d4995-647c-449c-afed-f527f0fa13f5.jpg'
    },
    {
      title: 'Панорамный тур',
      duration: '3-4 часа',
      distance: '6 км',
      difficulty: 'Средне',
      highlights: ['Смотровая площадка', 'Парк Революции', 'Пушкинский бульвар', 'Площадь Советов'],
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/0055f3c3-b722-40eb-adb4-3d57d821c226.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Ростов-на-Дону</h1>
          <div className="flex gap-6 items-center">
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Фотогалерея
            </a>
            <a href="#routes" className="text-foreground hover:text-primary transition-colors font-medium">
              Маршруты
            </a>
            <Button size="sm" className="hidden md:inline-flex">
              <Icon name="MapPin" size={16} className="mr-2" />
              Карта
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative py-24 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-1">Городские прогулки</Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Открой Ростов-на-Дону заново
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Авторские маршруты, скрытые локации и атмосферные фотографии южной столицы России
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Icon name="Camera" className="mr-2" size={20} />
                Смотреть галерею
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="MapPin" className="mr-2" size={20} />
                Выбрать маршрут
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Фотогалерея</h2>
            <p className="text-xl text-muted-foreground">Атмосферные снимки города и его достопримечательностей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 animate-scale-in">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                          <p className="text-sm text-white/80">{image.description}</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon name="Expand" size={20} className="text-foreground" />
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 border-0">
                  <img src={image.url} alt={image.title} className="w-full h-auto rounded-lg" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Популярные маршруты</h2>
            <p className="text-xl text-muted-foreground">Выбери свой путь по городу</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">{route.difficulty}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{route.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{route.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span>{route.distance}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Основные точки:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {route.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готов исследовать город?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Скачай карту маршрутов или присоединяйся к групповой экскурсии
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать карту
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Users" className="mr-2" size={20} />
              Записаться на экскурсию
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ростов-на-Дону</h3>
              <p className="text-secondary-foreground/80">
                Открывай новые локации и делись впечатлениями о городе
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#gallery" className="hover:text-accent transition-colors">Фотогалерея</a></li>
                <li><a href="#routes" className="hover:text-accent transition-colors">Маршруты</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">О проекте</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связаться</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Mail" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="MapPin" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-6 text-center text-sm text-secondary-foreground/60">
            © 2025 Ростов-на-Дону. Городские прогулки
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
