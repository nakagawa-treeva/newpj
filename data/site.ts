export const office = {
  name: "スワローテイル建築設計事務所",
  lead: "山口県光市の一級建築士事務所",
  architect: "永井 慎太郎",
  architectEn: "NAGAI SHINTARO",
  address: "〒743-0052 山口県光市三井2-14-22",
  tel: "0833489108",
  mail: "swallow.t751@gmail.com",
  instagram: "https://www.instagram.com/swallowtail_architect/",
  blog: "https://swallowar.exblog.jp/"
};

export type Work = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  location: string;
  use: string;
  tags: string[];
  images: string[];
  points: { title: string; text: string }[];
};

const workImages = (slug: string, count = 6) =>
  Array.from({ length: count }, (_, index) => `/images/works/${slug}/${slug}-${String(index + 1).padStart(2, "0")}.jpg`);

export const works: Work[] = [
  {
    slug: "when-will-i-be-little-again",
    title: "when will I be little again?",
    summary: "海のそばで、日常を豊かにする住まい。",
    description:
      "海辺の光や風を日常の中に受け止めながら、家族の時間が穏やかに広がっていく住宅です。明るさと開放感を大切に、何気ない日々が少し豊かに感じられる場所を目指しました。",
    location: "山口県光市",
    use: "住宅",
    tags: ["住宅", "海辺", "ビーチスタイル"],
    images: workImages("when-will-i-be-little-again"),
    points: [
      { title: "海辺の環境を感じること", text: "光や風、外の気配を日常の中で受け止められるよう、周辺環境との関係を大切にしています。" },
      { title: "明るく開放的な住まい", text: "軽やかで明るい暮らしの場として、素材や開口、余白の取り方を整理しています。" },
      { title: "家族の時間を穏やかに", text: "特別な時間だけでなく、何気ない毎日が豊かに感じられる空間を目指しています。" }
    ]
  },
  {
    slug: "atashinchi",
    title: "アタシンチ",
    summary: "家族らしさが息づく、心地よい住まい。",
    description:
      "住まい手らしさを丁寧に読み取り、毎日の動きや好みが自然に馴染む住宅です。家族の変化や過ごし方を受け止める、やわらかな余白を持たせています。",
    location: "公開情報に準拠",
    use: "住宅",
    tags: ["住宅", "家族", "余白"],
    images: workImages("atashinchi"),
    points: [
      { title: "住まい手らしさ", text: "暮らし方や好みを読み取り、家族にとって自然に馴染む住まいを目指しています。" },
      { title: "毎日の心地よさ", text: "特別な演出よりも、日々の生活の中で長く心地よく感じられる空間性を大切にしています。" },
      { title: "暮らしに寄り添う余白", text: "家族の変化や過ごし方を受け止められる、やわらかな余白を持たせています。" }
    ]
  },
  {
    slug: "a-day-beside-of-culture",
    title: "a day beside of culture",
    summary: "趣味と暮らしが隣り合う、自由な住まい。",
    description:
      "暮らしと趣味、文化的な時間が共存する住宅です。ガレージやアトリエのような場所が日常の延長として使われ、住まい手の時間が建築の表情として現れることを大切にしました。",
    location: "公開情報に準拠",
    use: "住宅／ガレージ／アトリエ要素あり",
    tags: ["住宅", "ガレージ", "アトリエ"],
    images: workImages("a-day-beside-of-culture"),
    points: [
      { title: "趣味と暮らしの共存", text: "ガレージやアトリエのような場所が、日常の延長として使われる構成を意識しています。" },
      { title: "自由なライフスタイル", text: "文化的な時間や趣味が、建築の表情として自然に現れることを大切にしています。" },
      { title: "軽やかな印象", text: "開放的で明るい場を目指し、暮らしの動きが軽やかにつながるよう計画しています。" }
    ]
  },
  {
    slug: "primitive-00h",
    title: "primitive #00H",
    summary: "素材と余白がつくる、静かな豊かさ。",
    description:
      "素材感とシンプルな空間性を大切にした住宅です。装飾に頼りすぎず、光の変化や暮らしの動きが静かに立ち上がるよう、余白と質感を整えています。",
    location: "公開情報に準拠",
    use: "住宅",
    tags: ["住宅", "素材", "ミニマル"],
    images: workImages("primitive-00h"),
    points: [
      { title: "素材の力を活かす", text: "装飾に頼りすぎず、素材そのものの表情や質感を住まいの魅力として引き出しています。" },
      { title: "シンプルな空間性", text: "余計な要素を抑えることで、暮らしの中の動きや光の変化が感じられる構成にしています。" },
      { title: "静かな豊かさ", text: "強い主張ではなく、日々の中で少しずつ馴染んでいく豊かさを大切にしています。" }
    ]
  }
];

export const services = [
  {
    title: "注文住宅",
    image: "/images/services/service-01-order-house.jpg",
    text: "家族の暮らし方や敷地の個性を丁寧に読み取り、心地よく育っていく住まいを設計します。"
  },
  {
    title: "リノベーション",
    image: "/images/services/service-02-renovation.jpg",
    text: "既存の建物が持つ魅力を活かしながら、今の暮らしに合う空間へ再構成します。"
  },
  {
    title: "増改築",
    image: "/images/services/service-03-extension.jpg",
    text: "家族構成やライフスタイルの変化に合わせ、住まいをより快適に整えます。"
  },
  {
    title: "インテリアコーディネート",
    image: "/images/services/service-04-interior.jpg",
    text: "素材、色、家具、照明のバランスを考え、空間全体の心地よさを高めます。"
  }
];

export const flow = [
  ["お問い合わせ", "住まいのこと、土地のこと、まだ具体的でない段階でもお気軽にご相談ください。"],
  ["ヒアリング", "暮らし方やご要望、好きな空気感、予算やスケジュールを丁寧に伺います。"],
  ["調査・ご提案", "敷地や既存建物を読み解き、方向性や計画案をご提案します。"],
  ["設計・監理", "設計図面をまとめ、工事中も現場と連携しながら完成まで伴走します。"]
];
