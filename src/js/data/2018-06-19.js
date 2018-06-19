dataSetVersion = "2018-06-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Original", tooltip: "feat. salt", key: "kirara" },
      { name: "Hidamari Sketch", tooltip: "aka nutbladder grills", key: "wide" },
      { name: "Gakkou Gurashi", tooltip: "spoiler: there is (no) hope", key: "gg" },
      { name: "A Channel", tooltip: "suki tooru~~", key: "achan" }, 
      { name: "Yuyushiki", tooltip: "yui's harem", key: "yys" },
      { name: "Kin`iro Mosaic", tooltip: "dess", key: "km" },
      { name: "New Game!", tooltip: "ganbaruzoi", key: "ng" },
      { name: "Stella no Mahou", tooltip: "notNewGame, also Teru being Teru", key: "snm" },
      { name: "Urara Meirochou", tooltip: "feat. bellies and Nono being bullied(?)", key: "urara" },
      { name: "Kill Me Baby", tooltip: "the most philosophical slapstick of all time", key: "kmb" },
      { name: "Sakura Trick", tooltip: "me: *drunk on dat gay shit*", key: "gay" },
      { name: "Blend S", tooltip: "a reminder that Hideri's CV is essentially Nico and you are gay", key: "blends" },
      { name: "Slow Start", tooltip: "for once it's not a protag's harem", key: "ss" },
      { name: "Yuru Camp", tooltip: "camp s h i y o", key: "yc" },
      { name: "Yumekui Merry", tooltip: "wait this is Kirara?!", key: "merry" },
      { name: "Ha na ya ma ta", tooltip: "paato paato the dramafes", key: "hana" },
      { name: "Comic Girls", tooltip: "abababa", key: "comiga" },
      { name: "Anne Happy", tooltip: "the kirara that describes you", key: "anhapi" },
      { name: "Harukana Recieve", tooltip: "haikyu, but fappable and always beach episode", key: "haruka" },
      { name: "K-ON!", tooltip: "KyoAni cashcow about cute girls not trying to do band things", key: "kon"},
      { name: "Gochuumon Usagi desu ka?", tooltip: "civil war: cawfee VS gween tea", key: "rabbits" }
    ]
  },
  {
    name: "Filter by Availability",
    key: "when",
    tooltip: "Check this to restrict to characters that appear in the game.",
    checked: false,
    sub: [ 
        { name: "In-Game", key: "in" }, 
        { name: "Soon.tm", tooltip: "aka datamined", key: "soon" }, 
        { name: "Never.tm", key: "never" }
    ]
  },
  {
    name: "Remove Traps",
    key: "notgirl",
    tooltip: "Check this to remove Hideri (and others?), because (s)he's ranked ??? in your heart."
  },
  {
    name: "Remove Manga-Only",
    key: "notmanga",
    tooltip: "Check this to remove Omi, you heartless bastard."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Yuno",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_10002001.org.jpeg",
    opts: {
      series: [ "wide" ],
      when: ["in"]
    }
  },
  {
    name: "Miyako",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_10011001.org.jpeg",
    opts: {
      series: [ "wide" ],
      when: ["in"]
    }
  },
  {
    name: "Hiro",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_10021001.org.jpeg",
    opts: {
      series: ["wide"],
      when: ["in"]
    }
  },
  {
    name: "Sae",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_10031001.org.jpeg",
    opts: {
      series: ["wide"],
      when: ["in"]
    }
  },
  {
    name: "Nori",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_10041001.org.jpeg",
    opts: {
      series: ["wide"],
      when: ["in"]
    }
  },
  {
    name: "Nazuna",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_10051001.org.jpeg",
    opts: {
      series: ["wide"],
      when: ["in"]
    }
  },
  {
    name: "Matsuri",
    img: "http://static.tvtropes.org/pmwiki/pub/images/sm_hidamatsuri_9036.jpg",
    opts: {
      series: ["wide"],
      when: ["never"]
    }
  },



  {
    name: "Yuzuko Nonohara",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_11002001.org.jpeg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Yui Ichii",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_11012000.org.jpeg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Yukari Hinata",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_11021001.org.jpeg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Yoriko Matsumoto",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_11032001.org.jpeg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Chiho Aikawa",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_11041001.org.jpeg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Fumi Hasegawa",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_11061001.org.jpeg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Kei Okano",
    img: "https://i.imgur.com/TRuWpVp.jpg",
    opts: {
      series: ["yys"],
      when: ["never"]
    }
  },



  {
    name: "Yuki Takeya",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_12002001.org.jpeg",
    opts: {
      series: ["gg"],
      when: ["in"]
    }
  },
  {
    name: "Kurumi Ebisuzawa",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_12011001.org.jpeg",
    opts: {
      series: ["gg"],
      when: ["in"]
    }
  },
  {
    name: "Yuri Wakasa",
    img: "https://kirafan.bangbang93.com/static/assets/texture/charauiresource/characard/characard_12021001.org.jpeg",
    opts: {
      series: ["gg"],
      when: ["in"]
    }
  }
];
