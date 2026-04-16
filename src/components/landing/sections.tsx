import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">Конкурс презентаций</Badge>,
    title: "Науки верные сыны.",
    content: 'Учёные и изобретатели, чьи открытия устремили человечество к звёздам.',
    showButton: false,
  },
  {
    id: 'tsiolkovsky',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1857 — 1935</Badge>,
    title: "Константин Циолковский",
    content: 'Скромный учитель из Калуги, который первым математически доказал возможность космических полётов. Его формула реактивного движения стала фундаментом всей космонавтики. «Земля — колыбель разума, но нельзя вечно жить в колыбели.»',
  },
  {
    id: 'korolev',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1907 — 1966</Badge>,
    title: "Сергей Королёв",
    content: 'Главный конструктор советской космической программы. Под его руководством был запущен первый спутник Земли, а Юрий Гагарин полетел в космос. Он превратил мечту Циолковского в реальность.',
  },
  {
    id: 'gagarin',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">1934 — 1968</Badge>,
    title: "Юрий Гагарин",
    content: '12 апреля 1961 года — первый человек в космосе. 108 минут полёта, которые навсегда изменили историю человечества. «Поехали!» — одно слово, ставшее символом эпохи.',
  },
  {
    id: 'legacy',
    subtitle: <Badge variant="outline" className="text-[#A78BFA] border-[#A78BFA] text-sm tracking-widest uppercase">Наследие</Badge>,
    title: "Их путь — наш горизонт.",
    content: 'Они мечтали, считали, строили и летели — чтобы мы могли смотреть на звёзды и знать: туда можно долететь. Наука — это мост между мечтой и реальностью.',
    showButton: false,
  },
]
