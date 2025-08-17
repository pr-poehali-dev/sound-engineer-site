import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioTracks = [
    { title: 'Миксинг рока', artist: 'The Rockers', duration: '3:45', genre: 'Rock' },
    { title: 'Мастеринг поп-трека', artist: 'Pop Star', duration: '4:12', genre: 'Pop' },
    { title: 'Сведение подкаста', artist: 'Podcast Show', duration: '2:30', genre: 'Podcast' },
    { title: 'Обработка вокала', artist: 'Singer Pro', duration: '3:58', genre: 'Vocal' }
  ]

  const services = [
    { name: 'Сведение треков', price: 'от 5,000₽', icon: 'Sliders' },
    { name: 'Мастеринг', price: 'от 3,000₽', icon: 'Settings' },
    { name: 'Вокальная обработка', price: 'от 2,500₽', icon: 'Mic' },
    { name: 'Звук для подкастов', price: 'от 4,000₽', icon: 'Radio' },
    { name: 'Реставрация аудио', price: 'от 6,000₽', icon: 'RefreshCw' },
    { name: 'Звукодизайн', price: 'от 8,000₽', icon: 'Waves' }
  ]

  const blogPosts = [
    { title: 'Секреты мастеринга в 2024', date: '15 авг 2024', views: '1.2k' },
    { title: 'Обработка вокала: пошаговый гайд', date: '8 авг 2024', views: '2.3k' },
    { title: 'Лучшие плагины для сведения', date: '1 авг 2024', views: '3.1k' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Icon name="Headphones" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-gradient">SoundPro</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {['Главная', 'Портфолио', 'Услуги', 'Студия', 'Блог', 'О себе', 'Контакты'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <Button className="gradient-bg text-white">Связаться</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-6 text-gradient">
              Профессиональный звукорежисер
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Превращаю ваши музыкальные идеи в профессиональные треки. 
              Сведение, мастеринг и звукодизайн на мировом уровне.
            </p>
            <div className="flex items-center justify-center gap-4 mb-12">
              <Button size="lg" className="gradient-bg text-white px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Послушать работы
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio & Audio Player */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Портфолио</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{audioTracks[currentTrack].title}</CardTitle>
                    <CardDescription>{audioTracks[currentTrack].artist}</CardDescription>
                  </div>
                  <Badge variant="outline">{audioTracks[currentTrack].genre}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Button
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="gradient-bg text-white"
                  >
                    <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
                  </Button>
                  <div className="flex-1">
                    <Progress value={33} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground">{audioTracks[currentTrack].duration}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {audioTracks.map((track, index) => (
                    <Button
                      key={index}
                      variant={currentTrack === index ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setCurrentTrack(index)}
                      className={currentTrack === index ? "gradient-bg text-white" : ""}
                    >
                      {track.title}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Услуги и прайс</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">{service.price}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">О себе</h3>
            <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-bg flex items-center justify-center">
              <Icon name="User" size={48} className="text-white" />
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Более 10 лет опыта в музыкальной индустрии. Работал с ведущими артистами и лейблами. 
              Специализируюсь на современных жанрах и инновационных подходах к звукообработке.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">10+ лет опыта</Badge>
              <Badge variant="secondary" className="px-4 py-2">500+ проектов</Badge>
              <Badge variant="secondary" className="px-4 py-2">Grammy номинант</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Студия</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-4">Профессиональное оборудование</h4>
              <p className="text-muted-foreground mb-6">
                Современная студия звукозаписи с оборудованием мирового класса. 
                Акустически обработанные помещения для идеального звука.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span>Консоль SSL AWS 948</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span>Мониторы Genelec 8351B</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-secondary" />
                  <span>Pro Tools HDX</span>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src="/img/4587517c-5f68-4711-9375-d07ce46137c1.jpg" 
                alt="Профессиональная студия звукозаписи"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Блог</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="FileText" size={32} className="text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Eye" size={14} />
                      {post.views}
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Контакты</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Mail" size={20} className="text-primary" />
                <span>studio@soundpro.ru</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span>Москва, ул. Звукозаписи, 15</span>
              </div>
              <div className="flex justify-center gap-4 pt-6">
                <Button variant="outline" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Music" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 SoundPro. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index