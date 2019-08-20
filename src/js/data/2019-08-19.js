/* property
    characterData, checked, img, key, name, nonanimu, options, opts, rarity,
    series, status, sub, tooltip, trap, when
*/
/* global
    dataSet,
    dataSetVersion
*/
/* eslint-disable no-global-assign */
dataSetVersion = "2019-08-19" // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {}
dataSet[dataSetVersion].options = [
  {
    name: "Filter by Year of Publication",
    key: "published",
    tooltip: "Check this to restrict to year of manga publication (in 5-year cycles).",
    checked: false,
    sub: [
      { name: "2003 - 2004", tooltip: "because we can", key: "2000" },
      { name: "2005 - 2009", tooltip: "when kirara became wider", key: "2005" },
      { name: "2010 - 2014", tooltip: "moe explosion years", key: "2010" },
      { name: "2015 - 2019", tooltip: "idolbait, moebait, all the bait + isekai", key: "2015" },
    ]
  },
  {
    name: "Filter by Year of Anime Adaptation",
    key: "adapted",
    tooltip: "Check this to restrict to year of anime adaptation (in 5-year cycles).",
    checked: false,
    sub: [
      { name: "2003 - 2004", tooltip: "because we can", key: "2000" },
      { name: "2005 - 2009", tooltip: "when kirara became wider", key: "2005" },
      { name: "2010 - 2014", tooltip: "moe explosion years", key: "2010" },
      { name: "2015 - 2019", tooltip: "idolbait, moebait, all the bait + isekai", key: "2015" },
      { name: "2020 - 2024", tooltip: "more of the same thing? who knows...", key: "2020" },
      { name: "Never", tooltip: "literally means never. F", key: "never" }
    ]
  },
  {
    name: "Filter by Magazine / Publication",
    key: "magazine",
    tooltip: "If you're a bold one, filter by magazine.",
    checked: false,
    sub: [
      {
        name: "Manga Time Kirara",
        key: "og",
        tooltip: "The original; the one-size-fits-all that started everything."
      },
      {
        name: "Manga Time Kirara Carat",
        key: "carat",
        tooltip: "The home of moe-personified 4komas."
      },
      {
        name: "Manga Time Kirara Forward",
        key: "forward",
        tooltip: "The one that isn't 4koma."
      },
      {
        name: "Manga Time Kirara MAX",
        key: "max",
        tooltip: "It's carat, but with more m o e."
      },
      {
        name: "Manga Time Kirara Magica",
        key: "madoka",
        tooltip: "Let's admit it. It's just Madoka.",
        checked: false
      },
      {
        name: "Manga Time Kirara Miracle!",
        key: "miracle",
        tooltip: "The dead one!",
      },
      {
        name: "COMIC FUZ",
        key: "fuz",
        tooltip: "The hi-tech one, which are all in your app, and will probably eventually cost an arm and leg to maintain."
      }
    ]
  },
  {
    name: "Kirara Fantasia Only",
    key: "nonkirafan",
    checked: false,
    tooltip: "Check this to include ONLY series confirmed to be in Kirara Fantasia, the official cross-over mobage for all things Kirara."
  },
  {
    name: "Disable Sequels / Prequels",
    key: "sequel",
    checked: true,
    tooltip: "Check this to disable all direct sequels or prequels. For example: K-ON! College / High School will be filtered out."
  }
]

dataSet[dataSetVersion].characterData = [
  //
  // Image Resolution needs to be something like 800 x 1138
  //
  {
    name: "K-ON!",
    img: "https://i.imgur.com/V1fyv4V.jpg",
    opts: {
      published: [ "2005" ],
      adapted: [ "2005", "2010" ],
      magazine: [ "og" ],
      nonkirafan: false,
      non4koma: false
    }
  }
  ,{
    name: "K-ON! College",
    img: "https://i.imgur.com/GfdMKGU.jpg",
    opts: {
      published: [ "2010" ],
      adapted: [ "never" ],
      magazine: [ "og" ],
      nonkirafan: true,
      sequel: true
    }
  }
  ,{
    name: "K-ON! High School",
    img: "https://i.imgur.com/QlALJlY.jpg",
    opts: {
      published: [ "2010" ],
      adapted: [ "never" ],
      magazine: [ "carat" ], // Why tho
      nonkirafan: true,
      sequel: true
    }
  }
  ,{
    name: "K-ON! Shuffle",
    img: "https://i.imgur.com/1pMOaTa.png?1", //TODO: Add volume 1 cover when it comes out.
    opts: {
      published: [ "2015" ],
      adapted: [ "never" ],
      magazine: [ "og" ],
      nonkirafan: true,
      sequel: false // It's a spin-off
    }
  }
  ,{
    name: "Acchi Kocchi",
    tooltip: "Place to Place",
    img: "https://i.imgur.com/2feajj5.jpg",
    opts: {
      published: [ "2005" ],
      adapted: [ "2010" ],
      magazine: [ "og" ],
      nonkirafan: false
    }
  }
  ,{
    name: "Doujin Work",
    img: "https://i.imgur.com/42kxCQW.jpg",
    opts: {
      published: [ "2000" ],
      adapted: [ "2005" ],
      magazine: [ "og" ],
      nonkirafan: false
    }
  }
  ,{
    name: "Yuyushiki",
    img: "https://i.imgur.com/QpmiPHc.jpg",
    opts: {
      published: [ "2005" ],
      adapted: [ "2010", "2015" ],
      magazine: [ "og" ],
      nonkirafan: false
    }
  }
  ,{
    name: "Slow Start",
    img: "https://i.imgur.com/43NrTA0.jpg",
    opts: {
      published: [ "2010" ],
      adapted: [ "2015" ],
      magazine: [ "og" ],
      nonkirafan: false
    }
  }
  //
  // Manga Time Kirara Carat
  //
  ,{
    name: "Hidamari Sketch",
    tooltip: "Sunshine Sketch (Yen Press)",
    img: "https://i.imgur.com/aLwQ51S.jpg",
    opts: {
      published: [ "2000" ],
      adapted: [ "2005", "2010" ],
      magazine: [ "carat" ],
      nonkirafan: false
    }
  }
  ,{
    name: "New Game!",
    img: "https://i.imgur.com/i5DiiKl.jpg",
    opts: {
      published: [ "2010" ],
      adapted: [ "2015" ],
      magazine: [ "carat" ],
      nonkirafan: false
    }
  }
  ,{
    name: "A-Channel",
    img: "https://i.imgur.com/k4v4XN4.jpg",
    opts: {
      published: [ "2005" ],
      adapted: [ "2010" ],
      magazine: [ "carat" ],
      nonkirafan: false
    }
  }

  //
  // Manga Time Kirara Forward
  //
  ,{
    name: "Anne Happy~♪",
    img: "https://i.imgur.com/jGRUNlq.png",
    opts: {
      published: [ "2010" ],
      adapted: [ "2015" ],
      magazine: [ "forward" ],
      nonkirafan: false
    }
  }
  ,{
    name: "Is the Order a Rabbit?",
    tooltip: "Gochuumon wa Usagi Desu ka? / GochiUsa",
    img: "https://i.imgur.com/Hxl1bXo.jpg",
    opts: {
      published: [ "2010" ],
      adapted: [ "2010", "2015", "2020" ],
      magazine: [ "max" ],
      nonkirafan: false
    }
  }
  ,{
    name: "Sakura Trick",
    img: "https://i.imgur.com/oYrQIAc.jpg",
    opts: {
      published: [ "2010" ],
      adapted: [ "2010" ],
      magazine: [ "miracle" ],
      nonkirafan: false
    }
  }
  
  //
  // END
  //
]
