import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Icon from '@/components/ui/icon'

const Index = () => {
  const [selectedSize, setSelectedSize] = useState('M')
  const [pollAnswer, setPollAnswer] = useState('')

  const products = [
    { id: 1, name: "Минимал Рубашка", price: "4 990₽", sizes: ["S", "M", "L", "XL"] },
    { id: 2, name: "Базовая Футболка", price: "2 490₽", sizes: ["XS", "S", "M", "L"] },
    { id: 3, name: "Классические Джинсы", price: "7 990₽", sizes: ["28", "30", "32", "34"] },
    { id: 4, name: "Оверсайз Свитшот", price: "5 990₽", sizes: ["S", "M", "L", "XL"] }
  ]

  const collections = [
    { name: "Весна 2024", description: "Легкие ткани и пастельные тона" },
    { name: "Минимализм", description: "Чистые линии и базовые цвета" },
    { name: "Streetwear", description: "Городской стиль для молодежи" }
  ]

  const blogPosts = [
    { title: "Как создать капсульный гардероб", date: "15 марта 2024" },
    { title: "Тренды сезона весна-лето", date: "10 марта 2024" },
    { title: "Уход за одеждой: советы экспертов", date: "5 марта 2024" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-black">FASHION</h1>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-black hover:text-gray-600">Главная</a>
                <a href="#catalog" className="text-black hover:text-gray-600">Каталог</a>
                <a href="#collections" className="text-black hover:text-gray-600">Коллекции</a>
                <a href="#ui-kit" className="text-black hover:text-gray-600">UI-Kit</a>
                <a href="#about" className="text-black hover:text-gray-600">О бренде</a>
                <a href="#blog" className="text-black hover:text-gray-600">Блог</a>
                <a href="#contact" className="text-black hover:text-gray-600">Контакты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.figma.com/design/fashion-store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-2 px-3 py-1 border border-black hover:bg-black hover:text-white transition-colors"
              >
                <Icon name="Figma" size={16} />
                <span className="text-sm">Figma</span>
              </a>
              <Icon name="Search" size={20} />
              <Icon name="Heart" size={20} />
              <Icon name="ShoppingBag" size={20} />
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-light text-black mb-6">
            НОВАЯ
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-black mb-8">
            КОЛЛЕКЦИЯ
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Минималистичная одежда для современного человека
          </p>
          <Button size="lg" className="px-8 py-4 text-lg">
            Посмотреть каталог
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Каталог</h2>
            <p className="text-gray-600 text-lg">Выберите идеальную вещь для вашего стиля</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 mb-4 overflow-hidden group-hover:bg-gray-200 transition-colors">
                    <img 
                      src="/img/c5f10f68-832d-4eb1-8672-35b2f696bfd4.jpg" 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-black mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <div className="flex gap-2 mb-4">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        className="w-10 h-10 p-0"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                  <Button className="w-full">Добавить в корзину</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UI-Kit Section */}
      <section id="ui-kit" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">UI-Kit</h2>
            <p className="text-gray-600 text-lg mb-8">Система компонентов нашего дизайна</p>
            <a 
              href="https://www.figma.com/design/fashion-store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <Icon name="Figma" size={20} />
              <span className="font-semibold">Открыть в Figma</span>
              <Icon name="ExternalLink" size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Typography */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Типографика</h3>
                <div className="space-y-4 p-6 border border-gray-200">
                  <h1 className="text-4xl font-light text-black">Heading 1</h1>
                  <h2 className="text-3xl font-semibold text-black">Heading 2</h2>
                  <h3 className="text-2xl font-medium text-black">Heading 3</h3>
                  <p className="text-lg text-gray-600">Body Large</p>
                  <p className="text-base text-gray-600">Body Regular</p>
                  <p className="text-sm text-gray-500">Body Small</p>
                </div>
              </div>

              {/* Buttons */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Кнопки</h3>
                <div className="space-y-4 p-6 border border-gray-200">
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg">Primary Large</Button>
                    <Button>Primary</Button>
                    <Button size="sm">Primary Small</Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" size="lg">Outline Large</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="outline" size="sm">Outline Small</Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="ghost" size="lg">Ghost Large</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="ghost" size="sm">Ghost Small</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Colors & Components */}
            <div className="space-y-8">
              {/* Colors */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Цветовая палитра</h3>
                <div className="grid grid-cols-2 gap-4 p-6 border border-gray-200">
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-black"></div>
                    <p className="text-sm text-gray-600">#000000<br />Primary Black</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-white border border-gray-200"></div>
                    <p className="text-sm text-gray-600">#FFFFFF<br />Primary White</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-gray-100"></div>
                    <p className="text-sm text-gray-600">#F5F5F5<br />Light Gray</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-16 bg-gray-600"></div>
                    <p className="text-sm text-gray-600">#6B7280<br />Medium Gray</p>
                  </div>
                </div>
              </div>

              {/* Form Elements */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Формы</h3>
                <div className="space-y-4 p-6 border border-gray-200">
                  <Input placeholder="Input field" />
                  <Input type="email" placeholder="Email field" />
                  <textarea 
                    className="w-full p-3 border border-gray-200 rounded-md resize-none h-20" 
                    placeholder="Textarea"
                  ></textarea>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="checkbox" className="rounded" />
                    <label htmlFor="checkbox" className="text-sm text-gray-600">Checkbox</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Icons Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-black mb-6">Иконки</h3>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 p-6 border border-gray-200">
              {[
                'Home', 'Search', 'Heart', 'ShoppingBag', 'User', 'Settings',
                'Mail', 'Phone', 'MapPin', 'Star', 'Plus', 'Minus',
                'Check', 'X', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown',
                'Menu', 'Grid', 'List', 'Filter', 'Sort', 'Download'
              ].map((iconName) => (
                <div key={iconName} className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                    <Icon name={iconName as any} size={20} />
                  </div>
                  <span className="text-xs text-gray-500 text-center">{iconName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Коллекции</h2>
            <p className="text-gray-600 text-lg">Каждая коллекция — это история</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Card key={index} className="group cursor-pointer border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gray-200 mb-6 overflow-hidden group-hover:bg-gray-300 transition-colors">
                    <img 
                      src="/img/80553c01-8bbb-420a-bcec-02f36867f1a8.jpg" 
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-xl text-black mb-2">{collection.name}</h3>
                  <p className="text-gray-600">{collection.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Poll Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Социальный опрос</h2>
            <p className="text-gray-600 text-lg">Ваше мнение формирует наши коллекции</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Какой стиль одежды вы предпочитаете?</h3>
              <div className="space-y-4">
                {[
                  { option: "Минимализм", votes: 45, percentage: 45 },
                  { option: "Классический", votes: 32, percentage: 32 },
                  { option: "Спортивный", votes: 15, percentage: 15 },
                  { option: "Авангардный", votes: 8, percentage: 8 }
                ].map((item) => (
                  <div key={item.option} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-black">{item.option}</span>
                      <span className="text-gray-600">{item.votes} голосов</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <Input placeholder="Ваш вариант ответа..." className="flex-1" />
                <Button>Проголосовать</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mood Board Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Мудборд</h2>
            <p className="text-gray-600 text-lg">Источники нашего вдохновения</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 hover:bg-gray-300 transition-colors overflow-hidden">
                <img 
                  src="/img/041f7a9d-d4c0-44f6-ab5b-9a47e4f911a2.jpg" 
                  alt={`Mood board ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-8">О бренде</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы создаем одежду для людей, которые ценят качество, комфорт и минимализм. 
              Каждая вещь разрабатывается с особым вниманием к деталям и изготавливается 
              из лучших материалов. Наша философия — меньше значит больше.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Качество</h3>
              <p className="text-gray-600">Только лучшие материалы и проверенные поставщики</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Экология</h3>
              <p className="text-gray-600">Ответственное производство и забота об окружающей среде</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-black mb-2">Комфорт</h3>
              <p className="text-gray-600">Одежда, которая подходит для любого случая жизни</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Блог</h2>
            <p className="text-gray-600 text-lg">Последние новости и статьи о моде</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group cursor-pointer border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 mb-4 flex items-center justify-center group-hover:bg-gray-300 transition-colors">
                    <Icon name="FileText" size={48} className="text-gray-500" />
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">{post.date}</Badge>
                    <h3 className="font-semibold text-black group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Контакты</h2>
            <p className="text-gray-600 text-lg">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Адрес</h3>
                  <p className="text-gray-600">Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-gray-600">info@fashion.ru</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Input placeholder="Ваше имя" />
              <Input placeholder="Email" />
              <textarea 
                className="w-full p-3 border border-gray-200 rounded-md resize-none h-32" 
                placeholder="Сообщение"
              ></textarea>
              <Button className="w-full">Отправить сообщение</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">FASHION</h3>
              <p className="text-gray-400">Минималистичная одежда для современного человека</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <div className="space-y-2 text-gray-400">
                <p>Рубашки</p>
                <p>Футболки</p>
                <p>Джинсы</p>
                <p>Свитшоты</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <div className="space-y-2 text-gray-400">
                <p>О нас</p>
                <p>Доставка</p>
                <p>Возврат</p>
                <p>Размеры</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Twitter" size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <p>© 2024 FASHION. Все права защищены.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index