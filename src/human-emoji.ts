const fitzpatrickModifiers = [
  ['🏻', 'light'],
  ['🏼', 'medium-light'],
  ['🏽', 'medium'],
  ['🏾', 'medium-dark'],
  ['🏿', 'dark'],
];
const humanEmoji = [
  "👋",
  "🤚",
  "🖐",
  "✋",
  "🖖",
  "👌",
  "🤏",
  "✌",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝",
  "👍",
  "👎",
  "✊",
  "👊",
  "🤛",
  "🤜",
  "👏",
  "🙌",
  "👐",
  "🤲",
  "🤝",
  "🙏",
  "✍",
  "💅",
  "🤳",
  "💪",
  "🦿",
  "🦵",
  "🦶",
  "👂",
  "🦻",
  "👃",
  "👶",
  "🧒",
  "👦",
  "👧",
  "🧑",
  "👱",
  "👨",
  "🧔",
  "👨‍🦰",
  "👨‍🦱",
  "👨‍🦳",
  "👨‍🦲",
  "👩",
  "👩‍🦰",
  "🧑‍🦰",
  "👩‍🦱",
  "🧑‍🦱",
  "👩‍🦳",
  "🧑‍🦳",
  "👩‍🦲",
  "🧑‍🦲",
  "👱‍♀️",
  "👱‍♂️",
  "🧓",
  "👴",
  "👵",
  "🙍",
  "🙍‍♂️",
  "🙍‍♀️",
  "🙎",
  "🙎‍♂️",
  "🙎‍♀️",
  "🙅",
  "🙅‍♂️",
  "🙅‍♀️",
  "🙆",
  "🙆‍♂️",
  "🙆‍♀️",
  "💁",
  "💁‍♂️",
  "💁‍♀️",
  "🙋",
  "🙋‍♂️",
  "🙋‍♀️",
  "🧏",
  "🧏‍♂️",
  "🧏‍♀️",
  "🙇",
  "🙇‍♂️",
  "🙇‍♀️",
  "🤦",
  "🤦‍♂️",
  "🤦‍♀️",
  "🤷",
  "🤷‍♂️",
  "🤷‍♀️",
  "🧑‍⚕️",
  "👨‍⚕️",
  "👩‍⚕️",
  "🧑‍🎓",
  "👨‍🎓",
  "👩‍🎓",
  "🧑‍🏫",
  "👨‍🏫",
  "👩‍🏫",
  "🧑‍⚖️",
  "👨‍⚖️",
  "👩‍⚖️",
  "🧑‍🌾",
  "👨‍🌾",
  "👩‍🌾",
  "🧑‍🍳",
  "👨‍🍳",
  "👩‍🍳",
  "🧑‍🔧",
  "👨‍🔧",
  "👩‍🔧",
  "🧑‍🏭",
  "👨‍🏭",
  "👩‍🏭",
  "🧑‍💼",
  "👨‍💼",
  "👩‍💼",
  "🧑‍🔬",
  "👨‍🔬",
  "👩‍🔬",
  "🧑‍💻",
  "👨‍💻",
  "👩‍💻",
  "🧑‍🎤",
  "👨‍🎤",
  "👩‍🎤",
  "🧑‍🎨",
  "👨‍🎨",
  "👩‍🎨",
  "🧑‍✈️",
  "👨‍✈️",
  "👩‍✈️",
  "🧑‍🚀",
  "👨‍🚀",
  "👩‍🚀",
  "🧑‍🚒",
  "👨‍🚒",
  "👩‍🚒",
  "👮",
  "👮‍♂️",
  "👮‍♀️",
  "🕵",
  "🕵️‍♂️",
  "🕵️‍♀️",
  "💂",
  "💂‍♂️",
  "💂‍♀️",
  "👷",
  "👷‍♂️",
  "👷‍♀️",
  "🤴",
  "👸",
  "👳",
  "👳‍♂️",
  "👳‍♀️",
  "👲",
  "🧕",
  "🤵",
  "👰",
  "🤰",
  "🤱",
  "🧑‍🍼",
  "👼",
  "🎅",
  "🤶",
  "🦸",
  "🦸‍♂️",
  "🦸‍♀️",
  "🦹",
  "🦹‍♂️",
  "🦹‍♀️",
  "🧙",
  "🧙‍♂️",
  "🧙‍♀️",
  "🧚",
  "🧚‍♂️",
  "🧚‍♀️",
  "🧛",
  "🧛‍♂️",
  "🧛‍♀️",
  "🧜",
  "🧜‍♂️",
  "🧜‍♀️",
  "🧝",
  "🧝‍♂️",
  "🧝‍♀️",
  "🧞",
  "🧞‍♂️",
  "🧞‍♀️",
  "🧟",
  "🧟‍♂️",
  "🧟‍♀️",
  "💆",
  "💆‍♂️",
  "💆‍♀️",
  "💇",
  "💇‍♂️",
  "💇‍♀️",
  "🚶",
  "🚶‍♂️",
  "🚶‍♀️",
  "🧍",
  "🧍‍♂️",
  "🧍‍♀️",
  "🧎",
  "🧎‍♂️",
  "🧎‍♀️",
  "🧑‍🦯",
  "👨‍🦯",
  "👩‍🦯",
  "🧑‍🦼",
  "👨‍🦼",
  "👩‍🦼",
  "🧑‍🦽",
  "👨‍🦽",
  "👩‍🦽",
  "🏃",
  "🏃‍♂️",
  "🏃‍♀️",
  "💃",
  "🕺",
  "🕴",
  "👯",
  "👯‍♂️",
  "👯‍♀️",
  "🧖",
  "🧖‍♂️",
  "🧖‍♀️",
  "🧘",
];

export {
  fitzpatrickModifiers,
  humanEmoji,
}