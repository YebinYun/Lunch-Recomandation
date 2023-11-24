const publicImage = (Image) => `${process.env.PUBLIC_URL}${Image}`;

export const PUBLIC_FOOD_IMAGE = {
  chineseFood: publicImage("/images/chinese-food.png"),
  chineseFood1: publicImage("/images/chineseFood1.png"),
  chineseFood2: publicImage("/images/chineseFood2.png"),
  chineseFood3: publicImage("/images/chineseFood3.png"),
  japaneseFood: publicImage("/images/japanese-food.png"),
  japaneseFood1: publicImage("/images/japaneseFood1.png"),
  japaneseFood2: publicImage("/images/japaneseFood2.png"),
  japaneseFood3: publicImage("/images/japaneseFood3.png"),
  koreanFood: publicImage("/images/korean-food.png"),
  koreanFood1: publicImage("/images/koreanFood1.png"),
  koreanFood2: publicImage("/images/koreanFood2.png"),
  koreanFood3: publicImage("/images/koreanFood3.png"),
  schoolFood: publicImage("/images/school-food.png"),
  schoolFood1: publicImage("/images/schoolFood1.png"),
  schoolFood2: publicImage("/images/schoolFood2.png"),
  schoolFood3: publicImage("/images/schoolFood3.png"),
  westernFood: publicImage("/images/western-food.png"),
  westernFood1: publicImage("/images/westernFood1.png"),
  westernFood2: publicImage("/images/westernFood2.png"),
  westernFood3: publicImage("/images/westernFood3.png"),
};

export const PUBLIC_BACKGROUND_IMAGE = {
  mainBackground: publicImage("/images/mainBackground.png"),
  resultBackground: publicImage("/images/chinese-food.png"),
};

export const PUBLIC_MAP_IMAGE = {
  seoulMap: publicImage("/images/seoulMap.png"),
};
