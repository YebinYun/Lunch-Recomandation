import { PUBLIC_FOOD_IMAGE } from "../images/images.tsx";

type FoodImage = string;

export const foods: FoodImage[][] = [
  [
    PUBLIC_FOOD_IMAGE.koreanFood1,
    PUBLIC_FOOD_IMAGE.chineseFood1,
    PUBLIC_FOOD_IMAGE.westernFood1,
    PUBLIC_FOOD_IMAGE.japaneseFood1,
    PUBLIC_FOOD_IMAGE.schoolFood1,
  ],
  [
    PUBLIC_FOOD_IMAGE.koreanFood2,
    PUBLIC_FOOD_IMAGE.chineseFood2,
    PUBLIC_FOOD_IMAGE.westernFood2,
    PUBLIC_FOOD_IMAGE.japaneseFood2,
    PUBLIC_FOOD_IMAGE.schoolFood2,
  ],
  [
    PUBLIC_FOOD_IMAGE.koreanFood3,
    PUBLIC_FOOD_IMAGE.chineseFood3,
    PUBLIC_FOOD_IMAGE.westernFood3,
    PUBLIC_FOOD_IMAGE.japaneseFood3,
    PUBLIC_FOOD_IMAGE.schoolFood3,
  ],
];

type FoodCountry = Record<FoodImage, FoodImage[]>;

export const foodCountry: FoodCountry = {
  한식: [
    PUBLIC_FOOD_IMAGE.koreanFood1,
    PUBLIC_FOOD_IMAGE.koreanFood2,
    PUBLIC_FOOD_IMAGE.koreanFood3,
  ],
  중식: [
    PUBLIC_FOOD_IMAGE.chineseFood1,
    PUBLIC_FOOD_IMAGE.chineseFood2,
    PUBLIC_FOOD_IMAGE.chineseFood3,
  ],
  일식: [
    PUBLIC_FOOD_IMAGE.japaneseFood1,
    PUBLIC_FOOD_IMAGE.japaneseFood2,
    PUBLIC_FOOD_IMAGE.japaneseFood3,
  ],
  양식: [
    PUBLIC_FOOD_IMAGE.westernFood1,
    PUBLIC_FOOD_IMAGE.westernFood2,
    PUBLIC_FOOD_IMAGE.westernFood3,
  ],
  분식: [
    PUBLIC_FOOD_IMAGE.schoolFood1,
    PUBLIC_FOOD_IMAGE.schoolFood2,
    PUBLIC_FOOD_IMAGE.schoolFood3,
  ],
};
