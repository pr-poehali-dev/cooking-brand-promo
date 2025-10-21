import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const recipes = [
    {
      title: 'Быстрая овсянка с ягодами',
      time: '5 минут',
      difficulty: 'Легко',
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/a1067f41-84a0-4a06-bf92-2b650bcbe25d.jpg'
    },
    {
      title: 'Паста с томатами',
      time: '15 минут',
      difficulty: 'Легко',
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/1aac4766-b286-4332-b5f0-c2b8158745de.jpg'
    },
    {
      title: 'Омлет с овощами',
      time: '10 минут',
      difficulty: 'Очень легко',
      image: 'https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/a1067f41-84a0-4a06-bf92-2b650bcbe25d.jpg'
    }
  ];

  const tips = [
    {
      icon: 'Clock',
      title: 'Готовьте заранее',
      description: 'Нарежьте овощи вечером — утром сэкономите 10 минут'
    },
    {
      icon: 'Flame',
      title: 'Одна сковорода',
      description: 'Используйте посуду, которую можно мыть в посудомойке'
    },
    {
      icon: 'ShoppingBag',
      title: 'Список покупок',
      description: 'Планируйте меню на неделю и покупайте всё сразу'
    },
    {
      icon: 'Refrigerator',
      title: 'Заморозка',
      description: 'Готовьте большие порции и замораживайте порционно'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Простая кухня</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#recipes" className="text-foreground hover:text-primary transition-colors">Рецепты</a>
            <a href="#tips" className="text-foreground hover:text-primary transition-colors">Советы</a>
          </div>
        </nav>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Вкусно и быстро — это реально
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Простые рецепты для занятых людей. Готовьте с удовольствием, а не по необходимости.
              </p>
              <Button size="lg" className="rounded-full">
                Смотреть рецепты
                <Icon name="ChefHat" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/a1067f41-84a0-4a06-bf92-2b650bcbe25d.jpg"
                alt="Домашняя кухня"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/projects/a582476c-0936-4e06-95c6-9df399d0e73b/files/f11ec87f-ba8f-41fd-b42b-42759382ac30.jpg"
                alt="Обо мне"
                className="rounded-3xl shadow-xl w-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">Обо мне</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Привет! Я верю, что готовить каждый день можно легко и с удовольствием. Не нужно часами стоять у плиты или покупать экзотические ингредиенты.
                </p>
                <p>
                  Моя миссия — показать, что вкусная домашняя еда доступна всем. Я делюсь рецептами, которые готовлю сама: быстро, просто и из обычных продуктов.
                </p>
                <p className="font-semibold text-primary">
                  Готовка — это не рутина, а способ заботы о себе и близких.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recipes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Популярные рецепты</h2>
            <p className="text-xl text-muted-foreground">Простые блюда на каждый день</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold">
                    {recipe.time}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{recipe.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Star" size={16} className="text-primary" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tips" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Полезные советы</h2>
            <p className="text-xl text-muted-foreground">Маленькие хитрости для большой экономии времени</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={tip.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                <p className="text-muted-foreground">{tip.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Простая кухня</h3>
          <p className="text-background/80 mb-6">
            Готовьте с любовью, питайтесь с удовольствием
          </p>
          <div className="flex justify-center gap-6">
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
      </footer>
    </div>
  );
};

export default Index;
