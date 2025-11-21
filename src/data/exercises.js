// GIF
import alpinistGif from "../assets/gif/alpinist.gif";
import begGif from "../assets/gif/beg.gif";
import burpiNoJumpGif from "../assets/gif/burpiBezPrujka.gif";
import burpiJumpGif from "../assets/gif/burpisprujkom.gif";
import dolgiyPrisedGif from "../assets/gif/dolgiyPrised.gif";
import hodbaGif from "../assets/gif/hodba.gif";
import jumpingJackGif from "../assets/gif/JumpingJek.gif";
import maxNogsGif from "../assets/gif/maxNogs.gif";
import otjimStenaGif from "../assets/gif/otjimOtStena.gif";
import plankaGif from "../assets/gif/planka.gif";
import plankaPlechGif from "../assets/gif/plankaPlech.gif";
import plankaKolenGif from "../assets/gif/plankaSkolen.gif";
import podnatieRukGif from "../assets/gif/podnatieRuk.gif";
import podnyatieNogGif from "../assets/gif/podnyatieNog.gif";
import prisedGif from "../assets/gif/prised.gif";
import prisedJumpGif from "../assets/gif/prisedPrujok.gif";
import prujokGif from "../assets/gif/prujok.gif";
import vupadBackGif from "../assets/gif/vupad.gif";
import vupadForwardGif from "../assets/gif/vupadVpered.gif";

// Static PREVIEW images
import alpinistPrev from "../assets/prev/akpinist_prev.png";
import begPrev from "../assets/prev/beg_prev.png";
import burpi1Prev from "../assets/prev/burpi1_prev.png";
import dolgiyPrisedPrev from "../assets/prev/dolgiyprised_prev.png";
import hodbaPrev from "../assets/prev/hodva_prev.png";
import jumpingPrev from "../assets/prev/jumpingJeck _prev.png";
import maxNogaPrev from "../assets/prev/maxNoga_prev.png";
import otjimStenaPrev from "../assets/prev/otjimOtstena_prev.png";
import plankaPrev from "../assets/prev/planka_prev.png";
import plankaRukiPrev from "../assets/prev/plankaSrukami_prev.png";
import plankaKolenPrev from "../assets/prev/plankasKolen_prev.png";
import rukamiPrev from "../assets/prev/maxirukami_prev.png";
import podnatieNogPrev from "../assets/prev/podniatieNog_prev.png";
import prisedPrev from "../assets/prev/prised_prev.png";
import prisedJumpPrev from "../assets/prev/pricedPrujok_prev.png";
import prujokPrev from "../assets/prev/PRUJOK_prev.png";
import vupadBackPrev from "../assets/prev/vupadNapadi_prev.png";
import vupadForwardPrev from "../assets/prev/vupadVpered_prev.png";

export const exercises = [
  {
    name: "Альпинист",
    description: "Из планки подтягивайте колени к груди в быстром темпе.",
    img: alpinistGif,
    staticImg: alpinistPrev,
    goal: "endurance",
    level: "medium",
    type: "press"
  },
  {
    name: "Бег на месте",
    description: "Бегайте на месте, поднимая колени на среднюю высоту.",
    img: begGif,
    staticImg: begPrev,
    goal: "loss",
    level: "beginner",
    type: "Full"
  },
  {
    name: "Бёрпи без прыжка",
    description: "Примите планку, вернитесь в присед — без финального прыжка.",
    img: burpiNoJumpGif,
    staticImg: burpi1Prev,
    goal: "loss",
    level: "medium",
    type: "Full"
  },
  {
    name: "Бёрпи с прыжком",
    description: "Полная версия: планка, отжимание, прыжок вверх.",
    img: burpiJumpGif,
    staticImg: burpi1Prev,
    goal: "endurance",
    level: "advanced",
    type: "Full"
  },
  {
    name: "Долгий присед",
    description: "Опускайтесь медленно, делайте паузу внизу и поднимайтесь.",
    img: dolgiyPrisedGif,
    staticImg: dolgiyPrisedPrev,
    goal: "power",
    level: "medium",
    type: "legs"
  },
  {
    name: "Ходьба на месте",
    description: "Ходите на месте в спокойном темпе, поднимая колени.",
    img: hodbaGif,
    staticImg: hodbaPrev,
    goal: "loss",
    level: "beginner",
    type: "Full"
  },
  {
    name: "Джампинг Джек",
    description: "Прыжки с разведением рук и ног в стороны.",
    img: jumpingJackGif,
    staticImg: jumpingPrev,
    goal: "loss",
    level: "medium",
    type: "Full"
  },
  {
    name: "Махи ногой вперед",
    description: "Стоя прямо, поднимайте ногу вверх.",
    img: maxNogsGif,
    staticImg: maxNogaPrev,
    goal: "power",
    level: "beginner",
    type: "legs"
  },
  {
    name: "Отжимания от стены",
    description: "Отжимайтесь стоя, упираясь руками в стену.",
    img: otjimStenaGif,
    staticImg: otjimStenaPrev,
    goal: "power",
    level: "beginner",
    type: "hands"
  },
  {
    name: "Планка",
    description: "Примите упор лёжа на локтях и держите тело ровно.",
    img: plankaGif,
    staticImg: plankaPrev,
    goal: "endurance",
    level: "beginner",
    type: "press"
  },
  {
    name: "Планка с касанием плеч",
    description: "Касайтесь одной рукой противоположного плеча.",
    img: plankaPlechGif,
    staticImg: plankaRukiPrev,
    goal: "endurance",
    level: "medium",
    type: "press"
  },
  {
    name: "Планка с колен",
    description: "Упрощённый вариант планки.",
    img: plankaKolenGif,
    staticImg: plankaKolenPrev,
    goal: "endurance",
    level: "beginner",
    type: "press"
  },
  {
    name: "Поднятие рук стоя",
    description: "Поднимайте руки вверх и вниз.",
    img: podnatieRukGif,
    staticImg: rukamiPrev,
    goal: "loss",
    level: "beginner",
    type: "hands"
  },
  {
    name: "Поднятие ноги в планке",
    description: "Поднимайте ноги поочередно.",
    img: podnyatieNogGif,
    staticImg: podnatieNogPrev,
    goal: "endurance",
    level: "advanced",
    type: "press"
  },
  {
    name: "Приседания",
    description: "Приседайте, держа спину ровно.",
    img: prisedGif,
    staticImg: prisedPrev,
    goal: "loss",
    level: "beginner",
    type: "legs"
  },
  {
    name: "Приседания с прыжком",
    description: "Присед + прыжок вверх.",
    img: prisedJumpGif,
    staticImg: prisedJumpPrev,
    goal: "endurance",
    level: "advanced",
    type: "legs"
  },
  {
    name: "Прыжки на месте",
    description: "Прыгайте на носках.",
    img: prujokGif,
    staticImg: prujokPrev,
    goal: "loss",
    level: "beginner",
    type: "Full"
  },
  {
    name: "Выпад назад",
    description: "Шаг назад и опускание в выпад.",
    img: vupadBackGif,
    staticImg: vupadBackPrev,
    goal: "loss",
    level: "beginner",
    type: "legs"
  },
  {
    name: "Выпад вперёд",
    description: "Шаг вперёд, опускание в выпад.",
    img: vupadForwardGif,
    staticImg: vupadForwardPrev,
    goal: "power",
    level: "medium",
    type: "legs"
  }
];
