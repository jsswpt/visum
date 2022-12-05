import { getRandomInt } from "shared/lib/getRandomInt";
import { Room } from "./room.type";

const recentRooms: Room[] = [
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/d3db1370c7c062248e0016bb6775feaa/960",
    name: "Смотрим The Boys",
    ownerName: "jsswpt",
    type: "public",
    usersCount: 5,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-north.userapi.com/sun9-83/s/v1/ig2/wpPC0TIESDtw9jHoibNRxthFU-h2_f6GxSLEQPC8rpHtiKA5UPzQtV8GSgTyp1rR193Okguw6_Vag55kTAPFaRCR.jpg?size=704x1080&quality=95&type=album",
    name: "Острый казырек жиест",
    ownerName: "mollehxh",
    type: "public",
    usersCount: 2,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-north.userapi.com/sun9-78/s/v1/ig2/z2hpNrzzVIbKU1G_qHdl7lFFMhJg136IK7EuuzskDnJi3eYv5-aezj4fDLFfzVmAckIChxGiYULg0aMwjaaOYrg4.jpg?size=720x1080&quality=95&type=album",
    name: "Выживаем",
    ownerName: "little_pig",
    type: "public",
    usersCount: 3,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-north.userapi.com/sun9-84/s/v1/ig2/fLKBoGp1XSbrBa_CMtv0nNb-WPYnGAvM-pM_walvC2IqAlSuwtmnAAGJ14eWdEhuq1uQSlmM9yLjN1Zk-xgGeTt2.jpg?size=772x1080&quality=95&type=album",
    name: "ммм пацанки)",
    ownerName: "girl_in_red",
    type: "private",
    usersCount: 8,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-east.userapi.com/sun9-19/s/v1/ig2/ijnBfoafCEoboySznBGK07MbwNRGd4al4Cxo4DGzt6Z6uEVxGbI7tqqVxqu9ptlDD6pAb1GBj3NzZd7LM_nCX9q_.jpg?size=704x1080&quality=95&type=album",
    name: "Турки юху",
    ownerName: "turkey_love",
    type: "private",
    usersCount: 6,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-east.userapi.com/sun9-74/s/v1/ig2/AecH57LOyC08qLqqYRqiknFZ8Ai8oa7aV58urs5yx9iA0hTNotJ8sksSVw2SoOxsHwxa0MA9fLM86Hj5d5GqqsoO.jpg?size=824x826&quality=96&type=album",
    name: "Отдыхаем пацанской компанией",
    ownerName: "jojo_boy",
    type: "private",
    usersCount: 3,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-north.userapi.com/sun9-82/s/v1/ig2/Pn3yV4iT-O3I8TwzozNHQKdAiYCv37TLIaidvvPM9hdu17ZdnFTkyiJq2m7cMh_LtNwb97KRzXqpkRAmIRatfoke.jpg?size=564x846&quality=96&type=album",
    name: "Глупый волтер отмывает деньги",
    ownerName: "jessie-pinkman",
    type: "public",
    usersCount: 9,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/600x900",
    name: "Вуменс",
    ownerName: "i_am_fem",
    type: "public",
    usersCount: 3,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-west.userapi.com/sun9-71/s/v1/ig2/eySFghzntzdk0owfHwufyGstGkpbHysNKRWYAohLsftNoZ9hQMMmVDAPpHsiQajwavzMYg4Yn76YtivgDpVQ8oh5.jpg?size=687x1080&quality=95&type=album",
    name: "Мамочки отдыхаем",
    ownerName: "young_mum",
    type: "public",
    usersCount: 9,
    videoUrl: "someurl",
  },
];

const activeRooms: Room[] = [
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/d3db1370c7c062248e0016bb6775feaa/960",
    name: "Смотрим The Boys",
    ownerName: "jsswpt",
    type: "public",
    usersCount: 5,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-north.userapi.com/sun9-83/s/v1/ig2/wpPC0TIESDtw9jHoibNRxthFU-h2_f6GxSLEQPC8rpHtiKA5UPzQtV8GSgTyp1rR193Okguw6_Vag55kTAPFaRCR.jpg?size=704x1080&quality=95&type=album",
    name: "Острый казырек жиест",
    ownerName: "mollehxh",
    type: "public",
    usersCount: 2,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-north.userapi.com/sun9-78/s/v1/ig2/z2hpNrzzVIbKU1G_qHdl7lFFMhJg136IK7EuuzskDnJi3eYv5-aezj4fDLFfzVmAckIChxGiYULg0aMwjaaOYrg4.jpg?size=720x1080&quality=95&type=album",
    name: "Выживаем",
    ownerName: "little_pig",
    type: "public",
    usersCount: 3,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-north.userapi.com/sun9-84/s/v1/ig2/fLKBoGp1XSbrBa_CMtv0nNb-WPYnGAvM-pM_walvC2IqAlSuwtmnAAGJ14eWdEhuq1uQSlmM9yLjN1Zk-xgGeTt2.jpg?size=772x1080&quality=95&type=album",
    name: "ммм пацанки)",
    ownerName: "girl_in_red",
    type: "private",
    usersCount: 8,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-east.userapi.com/sun9-19/s/v1/ig2/ijnBfoafCEoboySznBGK07MbwNRGd4al4Cxo4DGzt6Z6uEVxGbI7tqqVxqu9ptlDD6pAb1GBj3NzZd7LM_nCX9q_.jpg?size=704x1080&quality=95&type=album",
    name: "Турки юху",
    ownerName: "turkey_love",
    type: "private",
    usersCount: 6,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-east.userapi.com/sun9-74/s/v1/ig2/AecH57LOyC08qLqqYRqiknFZ8Ai8oa7aV58urs5yx9iA0hTNotJ8sksSVw2SoOxsHwxa0MA9fLM86Hj5d5GqqsoO.jpg?size=824x826&quality=96&type=album",
    name: "Отдыхаем пацанской компанией",
    ownerName: "jojo_boy",
    type: "private",
    usersCount: 3,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-north.userapi.com/sun9-82/s/v1/ig2/Pn3yV4iT-O3I8TwzozNHQKdAiYCv37TLIaidvvPM9hdu17ZdnFTkyiJq2m7cMh_LtNwb97KRzXqpkRAmIRatfoke.jpg?size=564x846&quality=96&type=album",
    name: "Глупый волтер отмывает деньги",
    ownerName: "jessie-pinkman",
    type: "public",
    usersCount: 9,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/1003770f-bc50-4ad5-b951-ea2b954a5300/600x900",
    name: "Вуменс",
    ownerName: "i_am_fem",
    type: "public",
    usersCount: 3,
    videoUrl: "someurl",
  },
  {
    id: getRandomInt(10000, 1),
    previewUrl:
      "https://sun9-west.userapi.com/sun9-71/s/v1/ig2/eySFghzntzdk0owfHwufyGstGkpbHysNKRWYAohLsftNoZ9hQMMmVDAPpHsiQajwavzMYg4Yn76YtivgDpVQ8oh5.jpg?size=687x1080&quality=95&type=album",
    name: "Мамочки отдыхаем",
    ownerName: "young_mum",
    type: "public",
    usersCount: 9,
    videoUrl: "someurl",
  },
];

export const getActiveRooms = async () => {
  return new Promise<Room[]>((res, rej) => {
    const timeout = setTimeout(() => {
      res(activeRooms);

      clearTimeout(timeout);
    }, 2000);
  });
};

export const getRecentRooms = async () => {
  return new Promise<Room[]>((res, rej) => {
    const timeout = setTimeout(() => {
      res(recentRooms);

      clearTimeout(timeout);
    }, 2000);
  });
};

export const getFriendsRooms = async () => {};
