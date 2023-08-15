import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "6d4b8b1d-gautam-userId",
    firstName: "Gautam",
    lastName: "Pandey",
    username: "gautamkp078",
    password: "Shekhar@078",
    coverImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691151246/TechTribe/UsersProfile/gautam-coverimg.jpg",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    link: "https://gautamkp.netlify.app/",
    bio: "programmer| web development | Working at localhost:3000 | Neogcamp 23 |",
    followers: [
      {
        _id: "8b2d501d-75ea-4c2c-9ee6-11c55df47e5c",
        firstName: "Vinit",
        lastName: "Kanse",
        username: "vinc3nati",
        pic: "https://res.cloudinary.com/randomwave45/image/upload/v1654258967/20170224152725_IMG_0843_eidmuv.jpg"
      }
    ],
    following: [
      {
        _id: "208c99e4-gilfoyle-userId",
        firstName: "Gilfoyle",
        lastName: "",
        username: "ihatedinesh",
        profileImage:
          "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg"
      },
      {
        _id: "97a90f3f-tanay-userId",
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage:
          "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg"
      }
    ],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "684e8f8b-kentcdodds-userId",
    firstName: "Kent",
    lastName: "C.Dodds",
    username: "@kentcdodds",
    coverImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1690988135/TechTribe/UsersProfile/kentc-coverImg.jpg",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725626/TechTribe/UsersProfile/kentcdodds.jpg",
    bio: "Improving the world with quality software · Husband, Father, Latter-day Saint, Teacher ",
    link: "https://kentcdodds.com/",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "d8487cf2-kevinpowell-userId",
    firstName: "Kevin",
    lastName: "Powell",
    username: "KevinJPowell",
    coverImage: "",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725801/TechTribe/UsersProfile/KevinJPowell.jpg",
    bio: "Helping people fall in love with CSS:",
    link: "https://www.kevinpowell.co/",
    followers: [],
    bookmarks: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "9785cc9d-gavinbelson-userId",
    firstName: "Gavin",
    lastName: "Belson",
    username: "gavinbelson",
    coverImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691666801/TechTribe/UsersProfile/gevin-coverImg.jpg",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852794/TechTribe/UsersProfile/Gavin%20belson.jpg",
    bio: "Founder and CEO of hooli",
    link: "https://www.linkedin.com/in/gavin-belson-bb0338138/",
    followers: [
      {
        _id: "6d4b8b1d-gautam-userId",
        firstName: "Gautam",
        lastName: "Pandey",
        username: "gautamkp078",
        profileImage:
          "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg"
      },
      {
        _id: "b67f8b91-richard-userId",
        firstName: "Richard",
        lastName: "Hendricks",
        username: "CEOof_PiedPiper",
        profileImage:
          "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852909/TechTribe/UsersProfile/Richard%20Hendricks.jpg"
      }
    ],
    bookmarks: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "b67f8b91-richard-userId",
    firstName: "Richard",
    lastName: "Hendricks",
    username: "CEOof_PiedPiper",
    coverImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1690988196/TechTribe/UsersProfile/richerd-coverImg.jpg",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852909/TechTribe/UsersProfile/Richard%20Hendricks.jpg",
    bio: "Founder and CEO of Pied Piper • Winner of TechCrunch Disrupt • Tabs over Spaces • parody account",
    link: "https://twitter.com/CEOof_PiedPiper?s=20",
    followers: [],
    bookmarks: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "208c99e4-gilfoyle-userId",
    firstName: "Gilfoyle",
    lastName: "",
    username: "ihatedinesh",
    coverImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1690988052/TechTribe/UsersProfile/gilfoyal-coverImg.jpg",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    bio: "Master coder. Satanist. Senior Systems Architect @ Pied Piper. Parody",
    link: "https://twitter.com/ihatedinesh",
    followers: [],
    bookmarks: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "a2f3b1fd-dineshisreal-userId",
    firstName: "Dinesh",
    lastName: "Chugtai",
    username: "dineshisreal",
    coverImage: "",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687079617/TechTribe/UsersProfile/dinesh.jpg",
    bio: "Senior Programmer at Pied Piper ",
    followers: [],
    bookmarks: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "97a90f3f-tanay-userId",
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanaypratap",
    coverImage: "",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    bio: "Founder @invactHQ @Microsoft | Fixing education | Tweets: Tech, Education, Career, and Startups.",
    link: "https://tanaypratap.com/",
    followers: [
      {
        _id: "6d4b8b1d-gautam-userId",
        firstName: "Gautam",
        lastName: "Pandey",
        username: "gautamkp078",
        profileImage:
          "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg"
      },
      {
        _id: "f6379c68-akshay-userId",
        firstName: "Akshay",
        lastName: "Saini",
        username: "akshaymarch7",
        profileImage:
          "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725846/TechTribe/UsersProfile/akshaymarch7.jpg"
      },
      {
        _id: "4e3d3f18-piyush-userId",
        firstName: "Piyush",
        lastName: "Agarwal",
        username: "Piyush_eon",
        profileImage:
          "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728011/TechTribe/UsersProfile/Piyush_eon.jpg"
      }
    ],
    bookmarks: [],
    following: [
      {
        _id: "f6379c68-akshay-userId",
        firstName: "Akshay",
        lastName: "Saini",
        username: "akshaymarch7",
        profileImage:
          "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725846/TechTribe/UsersProfile/akshaymarch7.jpg"
      }
    ],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "f6379c68-akshay-userId",
    firstName: "Akshay",
    lastName: "Saini",
    username: "akshaymarch7",
    coverImage: "",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725846/TechTribe/UsersProfile/akshaymarch7.jpg",
    bio: "A software engineer turned Teacher ❤️ Building Namaste React, check it out 👇",
    link: "https://namastedev.com/namaste-react/",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "4e3d3f18-piyush-userId",
    firstName: "Piyush",
    lastName: "Agarwal",
    username: "Piyush_eon",
    coverImage: "",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728011/TechTribe/UsersProfile/Piyush_eon.jpg",
    bio: "Frontend @Cars24India 🧑🏻‍💻 YouTube RoadsideCode",
    link: "https://www.youtube.com/roadsidecoder",
    followers: [],
    bookmarks: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate()
  }
];
