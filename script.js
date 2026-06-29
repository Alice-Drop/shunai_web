const playlist = [
  {
    id: "vocaloid",
    title: "术力口",
    filter: "vocaloid",
    songs: [
      ["ちっちゃな私", "小小的我"],
      ["ヒロイン RE クエスト", "女主角 RE 任务"],
      ["きゅうくらりん", "心动不已"],
      ["オノマトペメガネ", "拟声眼镜"],
      ["クーネル・エンゲイザー", "进食睡眠观察者"],
      ["小説 夏と罰（下）", "小说 夏与罚（下篇）"],
      ["paranoia", "偏执狂"],
      ["そらごと", "空谈 / 虚妄之言", "rinri的，不是明透的"],
      ["ベビーディーズ", "babydaze"],
      ["彗星になれたなら", "若能化作彗星"],
      ["flos", "繁花"],
      ["Melty Land Nightmare", "融化之地的噩梦"],
      ["妄想税", "妄想税"],
      ["翡翠のまち", "翡翠小镇"],
      ["おくすり飲んで寝よう", "吃下安眠药入睡吧"],
      ["風呂入るプロファイル", "入浴人设档案"],
      ["終身恋用契約", "终身恋爱契约"],
      ["メンヘラじゃないもん！", "我才不是地雷女！"],
      ["たぶん終わり", "大概到此结束"],
      ["ニューダーリン", "新欢"],
      ["おやすみ、常春のサクラより", "晚安，来自常春樱花"],
      ["誕生", "诞生"],
      ["一億年恋してる", "亿年爱恋"],
      ["再教育", "再教育"],
      ["霽れを待つ", "静待天晴"],
      ["くうになる", "成为空"],
      ["不幸人間強制収容所", "不幸人类强制收容所"],
      ["深海のリトルクライ", "深海的小小哭泣"],
      ["ループザルーム", "循环房间"],
      ["だきしめるまで", "直到拥抱"],
      ["だれかの心臓になれたなら", "如果能成为谁的心脏"],
      ["地球をあげる", "把地球送给你"],
      ["夏に去りし君を想フ", "思念于夏日离去的你"],
      ["恋しくなったら手を叩こう", "想要恋爱就拍手吧"],
      ["8.32", "8月32日"],
      ["惊蛰正中央", "惊蛰正中央"],
      ["拝啓", "敬启"],
      ["初恋日記", "初恋日记"],
      ["小説 夏と罰 (上)", "小说 夏与罚（上篇）"],
      ["Lecdency", "沉溺沉沦", "manika的"],
      ["ジェラシス", "嫉妒"],
      ["暮しガスメータ", "生计煤气表"],
      ["さようなら、花泥棒さん", "再见啦，偷花人"],
      ["バツ猫", "XxX猫咪"],
      ["回る空うさぎ", "回旋空中月兔"],
      ["蜜月アン・ドゥ・トワ", "蜜月二人世界"],
      ["サイエンス", "科学"],
      ["たぶん終わり", "大概结束了"],
      ["圆形监狱", "圆形监狱"],
      ["かなしばりに遭ったら", "若遭遇鬼压床"],
      ["プラリネ", "果仁糖"],
      ["少女 A", "少女 A"],
      ["少女 REI", "少女零"],
      ["月が綺麗ねと言われたい！", "好想被人说月色真美！"],
      ["ハートビート・フロムユー", "来自你的心跳"],
      ["さがさないでください", "请不要寻找我"],
      ["画脂鏤氷", "画脂镂冰"],
      ["ネバーランド", "梦幻岛", "deco的"],
      ["サワーチェリーが輝いたから", "酸樱桃熠熠生辉的缘故"],
      ["ゲンチアナ", "龙胆花"],
    ],
  },
  {
    id: "kotonoha",
    title: "琴叶姐妹专区",
    filter: "kotonoha",
    songs: [
      ["サワーチェリーが輝いたから", "酸樱桃熠熠生辉的缘故"],
      ["暮しガスメータ", "生计煤气表"],
      ["おやすみ、常春のサクラより", "晚安，来自常春樱花"],
      ["クーネル・エンゲイザー", "进食睡眠观察者"],
    ],
  },
  {
    id: "relativity",
    title: "非术力口 / 相对性理论",
    filter: "nonvocaloid",
    songs: [
      ["地獄先生", "地狱老师"],
      ["YOU & IDOL", "你与偶像"],
      ["ムーンライト銀河", "月光银河"],
    ],
  },
  {
    id: "milgram",
    title: "非术力口 / Milgram",
    filter: "nonvocaloid",
    songs: [
      ["アフターペイン", "伤痛过后"],
      ["ペイン", "痛楚"],
      ["アンビリカル", "脐带"],
    ],
  },
  {
    id: "other",
    title: "非术力口 / 其他",
    filter: "nonvocaloid",
    songs: [
      ["醜形恐怖症", "丑形恐惧症"],
      ["OTOMEROID", "少女机器人"],
      ["食虫植物", "食虫植物"],
      ["Loveit?", "Loveit?"],
      ["ラムのラブソング", "拉姆的情歌"],
      ["ナイトピア", "夜托邦"],
    ],
  },
];

const filterLabels = {
  all: "全部歌曲",
  vocaloid: "术力口",
  kotonoha: "琴叶姐妹专区",
  nonvocaloid: "非术力口",
};

const sectionsRoot = document.querySelector("#song-sections");
const searchInput = document.querySelector("#song-search");
const resultCount = document.querySelector("#result-count");
const resultTitle = document.querySelector("#result-title");
const emptyState = document.querySelector("#empty-state");
const filterTabs = document.querySelectorAll(".filter-tab");

let currentFilter = "all";

function normalizeText(value) {
  return value.toLocaleLowerCase().replace(/\s+/g, "");
}

function createSongCard(song) {
  const [title, translation, note] = song;
  const card = document.createElement("article");
  card.className = "song-card";

  const titleEl = document.createElement("h3");
  titleEl.className = "song-title";
  titleEl.textContent = title;

  const translationEl = document.createElement("p");
  translationEl.className = "song-translation";
  translationEl.textContent = translation;

  card.append(titleEl, translationEl);

  if (note) {
    const noteEl = document.createElement("span");
    noteEl.className = "song-note";
    noteEl.textContent = note;
    card.append(noteEl);
  }

  return card;
}

function sectionMatchesFilter(section) {
  if (currentFilter === "all") return true;
  return section.filter === currentFilter;
}

function songMatchesQuery(song, query) {
  if (!query) return true;
  return normalizeText(song.join(" ")).includes(query);
}

function renderSongs() {
  const query = normalizeText(searchInput.value);
  sectionsRoot.replaceChildren();

  let visibleCount = 0;

  playlist.forEach((section) => {
    if (!sectionMatchesFilter(section)) return;

    const songs = section.songs.filter((song) => songMatchesQuery(song, query));
    if (!songs.length) return;

    const sectionEl = document.createElement("section");
    sectionEl.className = "song-section";

    const heading = document.createElement("h3");
    heading.className = "section-title";
    heading.textContent = section.title;

    const grid = document.createElement("div");
    grid.className = "song-grid";

    songs.forEach((song) => {
      grid.append(createSongCard(song));
    });

    visibleCount += songs.length;
    sectionEl.append(heading, grid);
    sectionsRoot.append(sectionEl);
  });

  resultTitle.textContent = filterLabels[currentFilter];
  resultCount.textContent = visibleCount;
  emptyState.hidden = visibleCount !== 0;
}

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentFilter = tab.dataset.filter;
    filterTabs.forEach((item) => {
      item.classList.toggle("is-active", item === tab);
      item.setAttribute("aria-selected", item === tab ? "true" : "false");
    });
    renderSongs();
  });
});

searchInput.addEventListener("input", renderSongs);

renderSongs();
