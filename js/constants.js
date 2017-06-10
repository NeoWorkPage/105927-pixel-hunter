export const RULES = {
  attempts: 10,
  maxFailAttempts: 3,
  attemptTime: {
    value: 30,
    unit: `секунд`
  }
};

export const LEVELS_COUNT = 10;

export const LIVES_COUNT = 3;

export const ESTABLISH_YEAR = 2017;

export const SOCIAL_GROUPS = [{
  name: `Твиттер`,
  link: `https://twitter.com/htmlacademy_ru`,
  shortName: `tw`
}, {
  name: `Инстаграм`,
  link: `https://www.instagram.com/htmlacademy/`,
  shortName: `ins`
}, {
  name: `Фэйсбук`,
  link: `https://www.facebook.com/htmlacademy`,
  shortName: `fb`
}, {
  name: `Вконтакте`,
  link: `https://vk.com/htmlacademy`,
  shortName: `vk`
}];

export const QUESTION_TYPES = {
  chooseType: `chooseType`,
  findPic: `findPic`,
  photoOrPic: `photoOrPic`
};

export const QUESTIONS_TITLES = {
  [QUESTION_TYPES.chooseType]: `Угадайте для каждого изображения фото или рисунок?`,
  [QUESTION_TYPES.photoOrPic]: `Угадай, фото или рисунок?`,
  [QUESTION_TYPES.findPic]: `Найдите рисунок среди изображений`
};

export const ANSWERS_TYPES = {
  photo: `photo`,
  paint: `paint`,
};

export const ANSWERS_VALUES = {
  correct: `correct`,
  wrong: `wrong`,
  fast: `fast`,
  slow: `slow`
};

export const ANSWERS_COST = {
  [ANSWERS_VALUES.correct]: 100,
  [ANSWERS_VALUES.wrong]: 0,
  [ANSWERS_VALUES.fast]: 150,
  [ANSWERS_VALUES.slow]: 50
};
