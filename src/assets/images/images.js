const publicImage = (Image) => `${process.env.PUBLIC_URL}${Image}`;

export const PUBLIC_FOOD_IMAGE = {
  chineseFood1: publicImage("/images/chineseFood1.png"),
  chineseFood2: publicImage("/images/chineseFood2.png"),
  chineseFood3: publicImage("/images/chineseFood3.png"),
  japaneseFood1: publicImage("/images/japaneseFood1.png"),
  japaneseFood2: publicImage("/images/japaneseFood2.png"),
  japaneseFood3: publicImage("/images/japaneseFood3.png"),
  koreanFood1: publicImage("/images/koreanFood1.png"),
  koreanFood2: publicImage("/images/koreanFood2.png"),
  koreanFood3: publicImage("/images/koreanFood3.png"),
  schoolFood1: publicImage("/images/schoolFood1.png"),
  schoolFood2: publicImage("/images/schoolFood2.png"),
  schoolFood3: publicImage("/images/schoolFood3.png"),
  westernFood1: publicImage("/images/westernFood1.png"),
  westernFood2: publicImage("/images/westernFood2.png"),
  westernFood3: publicImage("/images/westernFood3.png"),
};

export const PUBLIC_BACKGROUND_IMAGE = {
  mainBackground: publicImage("/images/mainBackground.png"),
  resultBackground: publicImage("/images/secBackground.png"),
};

export const PUBLIC_MAP_IMAGE = {
  seoulMap: publicImage("/images/seoulMap.png"),
};

export const PUBLIC_LOADING_IMAGE = {
  loading: publicImage("/images/loading.gif"),
};
