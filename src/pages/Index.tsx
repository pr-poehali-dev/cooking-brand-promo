import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const recipes = [
    {
      title: 'Овсянка с ягодами',
      time: '5 минут',
      difficulty: 'Легко',
      calories: '280 ккал',
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/5c35886f-90d9-4045-90f2-9a96a83b9e4b.jpg',
      description: 'Идеальный здоровый завтрак для энергичного утра'
    },
    {
      title: 'Паста с томатами',
      time: '15 минут',
      difficulty: 'Легко',
      calories: '420 ккал',
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/18d72c1d-3c5c-4f24-a686-05911e952951.jpg',
      description: 'Простой итальянский ужин из доступных ингредиентов'
    },
    {
      title: 'Омлет с овощами',
      time: '10 минут',
      difficulty: 'Очень легко',
      calories: '310 ккал',
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/5c35886f-90d9-4045-90f2-9a96a83b9e4b.jpg',
      description: 'Сытный белковый завтрак с яркими овощами'
    }
  ];

  const tips = [
    {
      icon: 'Clock',
      title: 'Готовь заранее',
      description: 'Нарежь овощи вечером — утром сэкономишь 10 минут',
      color: 'bg-primary/10'
    },
    {
      icon: 'Flame',
      title: 'Одна сковорода',
      description: 'Выбирай рецепты для одной посуды — меньше мытья',
      color: 'bg-accent/10'
    },
    {
      icon: 'ShoppingBag',
      title: 'Планируй покупки',
      description: 'Составляй меню на неделю и покупай всё сразу',
      color: 'bg-primary/10'
    },
    {
      icon: 'Refrigerator',
      title: 'Используй заморозку',
      description: 'Готовь большие порции и замораживай на будущее',
      color: 'bg-accent/10'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Простая Кухня</h1>
          <div className="flex gap-6 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">О проекте</a>
            <a href="#recipes" className="text-foreground hover:text-primary transition-colors font-medium">Рецепты</a>
            <a href="#tips" className="text-foreground hover:text-primary transition-colors font-medium">Советы</a>
            <Button size="sm" className="hidden md:inline-flex">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Книга рецептов
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground">Готовка без стресса</Badge>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Вкусно, быстро и просто
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Рецепты для тех, кто ценит время, но не готов жертвовать вкусом. Готовь с удовольствием каждый день!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="ChefHat" className="mr-2" size={20} />
                  Смотреть рецепты
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Lightbulb" className="mr-2" size={20} />
                  Полезные советы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/5c35886f-90d9-4045-90f2-9a96a83b9e4b.jpg"
                alt="Домашняя кухня"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/files/a399e036-a115-4e0c-81eb-70b7e5ed5fee.jpeg"
                alt="О проекте"
                className="rounded-3xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4">О проекте</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Готовка — это легко!
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Привет! Я создала этот проект, чтобы доказать: готовить вкусную домашнюю еду может каждый. Даже если у тебя всего 15 минут.
                </p>
                <p>
                  Здесь только проверенные рецепты из простых продуктов. Никаких экзотических ингредиентов и сложных техник — только реальная кухня для реальных людей.
                </p>
                <p className="font-semibold text-primary text-xl">
                  Моя миссия — вернуть радость домашней готовки в каждый дом
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon name="Award" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">200+</p>
                    <p className="text-sm text-muted-foreground">Рецептов</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Icon name="Users" size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">50K+</p>
                    <p className="text-sm text-muted-foreground">Подписчиков</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recipes" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Популярные рецепты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Быстро и вкусно</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простые блюда на каждый день — от завтрака до ужина
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-white/90 backdrop-blur text-foreground border-0">
                      <Icon name="Clock" size={12} className="mr-1" />
                      {recipe.time}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">{recipe.difficulty}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{recipe.title}</h3>
                  <p className="text-muted-foreground mb-4">{recipe.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Flame" size={16} className="text-accent" />
                      <span>{recipe.calories}</span>
                    </div>
                    <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Смотреть рецепт
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg">
              Все рецепты
              <Icon name="ChevronRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="tips" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Кулинарные лайфхаки</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Полезные советы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Маленькие хитрости, которые сэкономят тебе кучу времени
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className={`${tip.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon name={tip.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Начни готовить уже сегодня!</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Подпишись на рассылку и получи книгу "10 рецептов на каждый день" бесплатно
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Твой email"
              className="px-6 py-3 rounded-full text-foreground flex-1 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button size="lg" variant="secondary" className="rounded-full">
              <Icon name="Mail" className="mr-2" size={20} />
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Простая Кухня</h3>
              <p className="text-background/80 mb-4">
                Готовь с любовью, питайся с удовольствием
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#about" className="hover:text-primary transition-colors">О проекте</a></li>
                <li><a href="#recipes" className="hover:text-primary transition-colors">Рецепты</a></li>
                <li><a href="#tips" className="hover:text-primary transition-colors">Советы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Mail" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-6 text-center text-sm text-background/60">
            © 2025 Простая Кухня. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;