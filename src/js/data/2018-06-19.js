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
      { name: "Koufuku Grafitti", tooltip: "Souma's grandma", key: "foodgasm"},
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
    img: "https://i.imgur.com/5l2Ekoc.jpg",
    opts: {
      series: [ "wide" ],
      when: ["in"]
    }
  },
  {
    name: "Miyako",
    img: "https://i.imgur.com/cNbZ8Gg.jpg",
    opts: {
      series: [ "wide" ],
      when: ["in"]
    }
  },
  {
    name: "Hiro",
    img: "https://i.imgur.com/WHJzb50.jpg",
    opts: {
      series: ["wide"],
      when: ["in"]
    }
  },
  {
    name: "Sae",
    img: "https://i.imgur.com/TUVJgMh.jpg",
    opts: {
      series: ["wide"],
      when: ["in"]
    }
  },
  {
    name: "Nori",
    img: "https://i.imgur.com/F0ToNFe.jpg",
    opts: {
      series: ["wide"],
      when: ["in"]
    }
  },
  {
    name: "Nazuna",
    img: "https://i.imgur.com/chPqUyM.jpg",
    opts: {
      series: ["wide"],
      when: ["in"]
    }
  },
  {
    name: "Matsuri",
    img: "https://i.imgur.com/sbKhIbT.jpg",
    opts: {
      series: ["wide"],
      when: ["never"]
    }
  },



  {
    name: "Yuzuko Nonohara",
    img: "https://i.imgur.com/L0NW5TO.jpg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Yui Ichii",
    img: "https://i.imgur.com/cgAG4bf.jpg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Yukari Hinata",
    img: "https://i.imgur.com/qaIc7uo.jpg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Yoriko Matsumoto",
    img: "https://i.imgur.com/GP5t5Eb.jpg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Chiho Aikawa",
    img: "https://i.imgur.com/JcVdm7T.jpg",
    opts: {
      series: ["yys"],
      when: ["in"]
    }
  },
  {
    name: "Fumi Hasegawa",
    img: "https://i.imgur.com/CKkoeBm.jpg",
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
    img: "https://i.imgur.com/92TcgbJ.jpg",
    opts: {
      series: ["gg"],
      when: ["in"]
    }
  },
  {
    name: "Kurumi Ebisuzawa",
    img: "https://i.imgur.com/5kTdgCk.jpg",
    opts: {
      series: ["gg"],
      when: ["in"]
    }
  },
  {
    name: "Yuri Wakasa",
    img: "https://i.imgur.com/d7Snyy2.jpg",
    opts: {
      series: ["gg"],
      when: ["in"]
    }
  },
  {
    name: "Miki Naoki",
    img: "https://i.imgur.com/djD9QzI.jpg",
    opts: {
      series: ["gg"],
      when: ["in"]
    }
  },
  {
    name: "Megumi Sakura",
    img: "https://i.imgur.com/iPOUVOX.jpg",
    opts: {
      series: ["gg"],
      when: ["in"]
    }
  },


  {
    name: "Aoba Suzukaze",
    img: "https://i.imgur.com/p8rY4Ig.jpg",
    opts: {
      series: ["ng"],
      when: ["in"]
    }
  },
  {
    name: "Hifumi Takimoto",
    img: "https://i.imgur.com/5dOhBCb.jpg",
    opts: {
      series: ["ng"],
      when:["in"]
    }
  },
  {
    name: "Hajime Shinoda",
    img: "https://i.imgur.com/3ieZMGf.jpg",
    opts: {
      series: ["ng"],
      when: ["in"]
    }
  }
];
