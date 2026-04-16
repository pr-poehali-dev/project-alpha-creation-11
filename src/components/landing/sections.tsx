import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">Конкурс презентаций</Badge>,
    title: "Науки верные сыны.",
    content: 'Учёные и изобретатели, чьи открытия устремили человечество к звёздам.',
  },
  {
    id: 'tsiolkovsky',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1857 — 1935</Badge>,
    title: "Константин Циолковский",
    content: 'Скромный учитель из Калуги — первым математически доказал возможность космических полётов. Его формула реактивного движения стала фундаментом всей мировой космонавтики.',
  },
  {
    id: 'tsiolkovsky-quote',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">Циолковский · Главная идея</Badge>,
    title: "«Земля — колыбель разума, но нельзя вечно жить в колыбели.»",
    content: 'Разработал теорию многоступенчатых ракет, предсказал орбитальные станции и межпланетные перелёты — за полвека до их воплощения.',
  },
  {
    id: 'korolev',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1907 — 1966</Badge>,
    title: "Сергей Королёв",
    content: 'Главный конструктор советской космической программы. Прошёл ГУЛАГ — и всё равно создал ракету, которая унесла человека в космос. Величайший инженер XX века.',
  },
  {
    id: 'korolev-achievements',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">Королёв · Достижения</Badge>,
    title: "Спутник. Белка и Стрелка. Гагарин.",
    content: '4 октября 1957 — первый искусственный спутник Земли. 1960 — первые живые существа вернулись из космоса. 1961 — первый человек в космосе. Всё это — Королёв.',
  },
  {
    id: 'gagarin',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1934 — 1968</Badge>,
    title: "Юрий Гагарин",
    content: '12 апреля 1961 года. 108 минут полёта на корабле «Восток». Первый человек, увидевший Землю из космоса. Одно слово облетело весь мир — «Поехали!»',
  },
  {
    id: 'tereshkova',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">род. 1937</Badge>,
    title: "Валентина Терешкова",
    content: 'Первая женщина в космосе. 16 июня 1963 года на корабле «Восток-6» совершила 48 витков вокруг Земли за 71 час. Позывной — «Чайка».',
  },
  {
    id: 'leonov',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1934 — 2019</Badge>,
    title: "Алексей Леонов",
    content: '18 марта 1965 года — первый выход человека в открытый космос. 12 минут за бортом «Восхода-2». Леонов был ещё и художником — рисовал космос таким, каким видел его своими глазами.',
  },
  {
    id: 'vonbraun',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1912 — 1977</Badge>,
    title: "Вернер фон Браун",
    content: 'Создатель ракеты «Сатурн V», доставившей людей на Луну. Его инженерный гений воплотил американскую программу «Аполлон» и навсегда изменил вектор космической гонки.',
  },
  {
    id: 'armstrong',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1930 — 2012</Badge>,
    title: "Нил Армстронг",
    content: '20 июля 1969 года — первый шаг человека по поверхности Луны. «Один маленький шаг для человека — огромный скачок для всего человечества.»',
  },
  {
    id: 'kepler',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1571 — 1630</Badge>,
    title: "Иоганн Кеплер",
    content: 'Открыл три закона движения планет. Без его математических законов невозможно было бы рассчитать ни одну космическую траекторию — ни в XVII веке, ни сейчас.',
  },
  {
    id: 'hubble',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1889 — 1953</Badge>,
    title: "Эдвин Хаббл",
    content: 'Доказал, что Вселенная не ограничивается нашей галактикой, и открыл её расширение. В его честь назван орбитальный телескоп, показавший нам миллиарды галактик.',
  },
  {
    id: 'tsander',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1887 — 1933</Badge>,
    title: "Фридрих Цандер",
    content: 'Пионер реактивной техники и соратник Королёва. Создал первый советский жидкостный ракетный двигатель. Его девиз звучал буквально: «Вперёд, на Марс!»',
  },
  {
    id: 'legacy',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">Наследие</Badge>,
    title: "Их путь — наш горизонт.",
    content: 'Они мечтали, считали, строили и летели — чтобы мы могли смотреть на звёзды и знать: туда можно долететь. Наука — это мост между мечтой и реальностью.',
  },
  {
    id: 'thanks',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">Науки верные сыны</Badge>,
    title: "Спасибо за внимание!",
    content: 'Звёзды ждут тех, кто не боится мечтать и работать.',
  },
]
