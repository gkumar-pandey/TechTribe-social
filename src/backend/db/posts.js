import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "6f6b18f7-post-1",
    content: "Read good code to write good code.",
    mediaUrl: "",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "gautamkp078",
    firstName: "Gautam",
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    id: 1,
    createdAt: "2023-06-15T16:43:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "c97e18a4-post-2",
    content: "coding tip: take regular breaks from coding.",
    mediaUrl: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "gautamkp078",
    firstName: "Gautam",
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-15T13:40:34+05:30",
    updatedAt: formatDate(),
    id: 2
  },
  {
    _id: "f81085b6-post-3",
    content: "",
    mediaUrl: "",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "gautamkp078",
    firstName: "Gautam",
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-15T10:48:34+05:30",
    updatedAt: formatDate(),
    id: 3
  },
  {
    _id: "7b6528a9-post-4",
    content:
      "Let me put this in terms you'll understand. I'm like a suicide bomber of humiliation. I'm happy to go out as long as i take you with me. Your shame is my paradise.",
    mediaUrl: "",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "CEOof_PiedPiper",
    firstName: "Richard",
    lastName: "Hendricks",
    userId: "b67f8b91-richard-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852909/TechTribe/UsersProfile/Richard%20Hendricks.jpg",
    createdAt: "2023-07-15T15:40:34+05:30",
    updatedAt: formatDate(),
    id: 4
  },
  {
    _id: "e0a7e6d2-post-5",
    content:
      "went to bed at 12, got up at around 4:41, I have no idea what happened",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [
        {
          username: "gautamkp078",
          firstName: "Gautam",
          lastName: "Pandey",
          userId: "6d4b8b1d-gautam-userId",
          profileImage:
            "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg"
        }
      ],
      dislikedBy: []
    },
    comments: [],
    username: "CEOof_PiedPiper",
    firstName: "Richard",
    lastName: "Hendricks",
    userId: "b67f8b91-richard-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852909/TechTribe/UsersProfile/Richard%20Hendricks.jpg",
    createdAt: "2023-06-15T9:40:34+05:30",
    updatedAt: formatDate(),
    id: 5
  },
  {
    _id: "8a1e7d63-post-6",
    content: "I'm ready to fight Gavin Belson.",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [
        {
          username: "gautamkp078",
          firstName: "Gautam",
          lastName: "Pandey",
          userId: "6d4b8b1d-gautam-userId",
          profileImage:
            "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg"
        }
      ],
      dislikedBy: []
    },
    comments: [],
    username: "CEOof_PiedPiper",
    firstName: "Richard",
    lastName: "Hendricks",
    userId: "b67f8b91-richard-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852909/TechTribe/UsersProfile/Richard%20Hendricks.jpg",
    createdAt: "2023-07-15T17:39:3+05:30",
    updatedAt: formatDate(),
    id: 6
  },
  {
    _id: "c4b57f82-post-7",
    content:
      "My stomach hurts and I can barely swallow because my mouth is dry. Just another day living in Silicon Valley!",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "CEOof_PiedPiper",
    firstName: "Richard",
    lastName: "Hendricks",
    userId: "b67f8b91-richard-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852909/TechTribe/UsersProfile/Richard%20Hendricks.jpg",
    createdAt: "2023-06-15T14:4:34+05:30",
    updatedAt: formatDate(),
    id: 7
  },
  {
    _id: "e7fe9f07-post-8",
    content: "I'm having nightmares that i forgot to back up my systems",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [
        {
          username: "gautamkp078",
          firstName: "Gautam",
          lastName: "Pandey",
          _id: "6d4b8b1d-gautam-userId",
          profileImage:
            "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg"
        }
      ],
      dislikedBy: []
    },
    comments: [],
    username: "CEOof_PiedPiper",
    firstName: "Richard",
    lastName: "Hendricks",
    userId: "b67f8b91-richard-userId",
    profileUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852909/TechTribe/UsersProfile/Richard%20Hendricks.jpg",
    createdAt: "2023-06-15T16:45:34+05:30",
    updatedAt: formatDate(),
    id: 8
  },
  {
    _id: "48d913ac-post-9",
    content: "",
    likes: {
      likeCount: 9,
      likedBy: [
        {
          firstName: "Gautam",
          lastName: "Pandey",
          _id: "6d4b8b1d-gautam-userId",
          profileImage:
            "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg"
        }
      ],
      dislikedBy: []
    },
    comments: [],
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687081251/TechTribe/PostsImg/post-3.jpg",
    username: "CEOof_PiedPiper",
    firstName: "Richard",
    lastName: "Hendricks",
    userId: "b67f8b91-richard-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852909/TechTribe/UsersProfile/Richard%20Hendricks.jpg",
    createdAt: "2023-07-15T10:35:34+05:30",
    updatedAt: formatDate(),
    id: 9
  },
  {
    _id: "f11c16db-post-10",
    content:
      "Dinesh is really good at self isolating because no one wants to be near him anyways",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    createdAt: "2023-07-15T13:20:34+05:30",
    updatedAt: formatDate(),
    id: 10
  },
  {
    _id: "0ddc3b80-post-11",
    content:
      "Dinesh is really good at self isolating because no one wants to be near him anyways",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    createdAt: "2023-06-15T13:40:34+05:30",
    updatedAt: formatDate(),
    id: 11
  },
  {
    _id: "14f4e203-post-12",
    content: "I did what need to be done",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687082639/TechTribe/PostsImg/post-4.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    id: 12,
    createdAt: "2023-06-11T13:20:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "38c3e71f-post-13",
    content: "I don't trust anyone. It's a huge part of my belief system.",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687082875/TechTribe/PostsImg/post-5.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    id: 13,
    createdAt: "2023-08-11T10:20:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "d262ed67-post-14",
    content:
      "I hate Dinesh more than Richard hates people who use spaces over tabs.",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    createdAt: "2023-07-11T13:20:34+05:30",
    updatedAt: formatDate(),
    id: 14
  },
  {
    _id: "b1c06d60-post-15",
    content: "I don't trust anyone. It's a huge part of my belief system. ",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687082875/TechTribe/PostsImg/post-5.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    createdAt: "2023-08-11T18:20:34+05:30",
    updatedAt: formatDate(),
    id: 15
  },
  {
    _id: "a0e17b1d-post-16",
    content: "I don't trust anyone. It's a huge part of my belief system. ",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687082875/TechTribe/PostsImg/post-5.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    createdAt: "2023-06-20T13:40:34+05:30",
    updatedAt: formatDate(),
    id: 16
  },
  {
    _id: "7c015944-post-17",
    content: "It's not magic, it's talent and sweat",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687083339/TechTribe/PostsImg/post-6.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "ihatedinesh",
    firstName: "Gilfoyle",
    lastName: "",
    userId: "208c99e4-gilfoyle-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687078552/TechTribe/UsersProfile/gilfoyl.jpg",
    createdAt: "2023-08-11T13:24:34+05:30",
    updatedAt: formatDate(),
    id: 17
  },
  {
    _id: "44d468d6-post-18",
    content:
      "Want something in life? Just don’t quit. 99% people quit, if you don’t, you win. I keep reminding myself that whenever the going gets tough.",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    mediaUrl: "",
    username: "tanaypratap",
    firstName: "Tanay",
    lastName: "Pratap",
    userId: "97a90f3f-tanay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-07-15T13:30:34+05:30",
    updatedAt: formatDate(),
    id: 18
  },
  {
    _id: "8dcdbf20-post-19",
    content:
      "If your code is so complex that it needs its own user manual, it's time to rethink your approach.Keep it simple, Einstein.",
    mediaUrl: "",
    username: "tanaypratap",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Tanay",
    lastName: "Pratap",
    userId: "97a90f3f-tanay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-07-15T12:40:04+05:30",
    updatedAt: formatDate(),
    id: 19
  },
  {
    _id: "44d468d6-post-20",
    content:
      "The way to learn a new stack is not to learn a new stack unless you have a depth of knowledge in at least one.",
    mediaUrl: "",
    username: "tanaypratap",
    firstName: "Tanay",
    lastName: "Pratap",
    userId: "97a90f3f-tanay-userId",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-06-15T13:10:34+05:30",
    updatedAt: formatDate(),
    id: 20
  },
  {
    _id: "e6de4333-post-21",
    content: "Tera bhai acha engineer banega >>> Tera bhai google jayega",
    mediaUrl: "",
    firstName: "Tanay",
    lastName: "Pratap",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "tanaypratap",
    userId: "97a90f3f-tanay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-07-15T13:20:34+05:30",
    updatedAt: formatDate(),
    id: 21
  },
  {
    _id: "5252d42d-post-22",
    content: "When you dream big you end up sleeping less.",
    mediaUrl: "",
    username: "tanaypratap",
    firstName: "Tanay",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    lastName: "Pratap",
    userId: "97a90f3f-tanay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-05-11T13:28:34+05:30",
    updatedAt: formatDate(),
    id: 22
  },
  {
    _id: "660c03f3-post-23",
    content:
      "If you feel bad there’s no reason for continuing. Success doesn’t justify the price you pay by feeling miserable.",
    mediaUrl: "",
    username: "tanaypratap",
    firstName: "Tanay",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    lastName: "Pratap",
    userId: "97a90f3f-tanay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-06-15T16:42:34+05:30",
    updatedAt: formatDate(),
    id: 23
  },
  {
    _id: "942a2327-post-24",
    content:
      "Practice makes perfect, but only if you're pushing yourself to new heights. Don't get comfortable with the current system. The key to unlock expertise is to raise the each practice session.",

    mediaUrl: "",
    username: "tanaypratap",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Tanay",
    lastName: "Pratap",
    userId: "97a90f3f-tanay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-07-15T12:40:32+05:30",
    updatedAt: formatDate(),
    id: 24
  },
  {
    _id: "3e55b1bc-post-25",
    content:
      "True growth happens outside of your comfort zone, so get comfortable with being uncomfortable! 💪",
    mediaUrl: "",
    username: "tanaypratap",
    firstName: "Tanay",
    lastName: "Pratap",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "97a90f3f-tanay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-07-10T13:45:34+05:30",
    updatedAt: formatDate(),
    id: 25
  },
  {
    _id: "7c015944-post-26",
    content:
      "When you grow in your career, your entire family grows along with you.",
    mediaUrl: "",
    username: "tanaypratap",
    firstName: "Tanay",
    lastName: "Pratap",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "97a90f3f-tanay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725409/TechTribe/UsersProfile/tanaypratap.jpg",
    createdAt: "2023-07-15T11:42:34+05:30",
    updatedAt: formatDate(),
    id: 26
  },

  {
    _id: "66fcd4f9-post-27",
    content: "Started New Project 🚀🚀",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687066217/TechTribe/PostsImg/post-2.jpg",
    username: "gautamkp078",
    firstName: "Gautam",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-05T11:42:34+05:30",
    updatedAt: formatDate(),
    id: 27
  },
  {
    _id: "a1a90fd1-post-28",
    content: "Git: The only place where committing is a good thing.",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687087724/TechTribe/PostsImg/post-7.jpg",
    username: "gautamkp078",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Gautam",
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-05T16:40:34+05:30",
    updatedAt: formatDate(),
    id: 28
  },
  {
    _id: "e7fe9f07-post-29",
    content:
      "The important thing in life is to have a great aim, and the determination to attain it",
    mediaUrl: "",
    username: "gautamkp078",
    firstName: "Gautam",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-15T13:20:34+05:30",
    updatedAt: formatDate(),
    id: 29
  },
  {
    _id: "48d913ac-post-30",
    content: "Programmer's diet: coffee++, sleep--",
    mediaUrl: "",
    username: "gautamkp078",
    firstName: "Gautam",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-15T13:04:34+05:30",
    updatedAt: formatDate(),
    id: 30
  },
  {
    _id: "f11c16db-post-31",
    content: "Are you a bug??? Because am always searching for you...😌",
    mediaUrl: "",
    username: "gautamkp078",
    firstName: "Gautam",
    lastName: "Pandey",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-06-15T13:47:34+05:30",
    updatedAt: formatDate(),
    id: 31
  },
  {
    _id: "0ddc3b80-post-32",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686852422/TechTribe/PostsImg/post-1.png",
    username: "gautamkp078",
    firstName: "Gautam",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-15T11:40:37+05:30",
    updatedAt: formatDate(),
    id: 32
  },
  {
    _id: "14f4e203-post-33",
    content:
      "JavaScript scoping: It's like a game of hide-and-seek with variables. They can magically disappear or unexpectedly show up when you least expect it",
    mediaUrl: "",
    username: "gautamkp078",
    firstName: "Gautam",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-18T15:40:34+05:30",
    updatedAt: formatDate(),
    id: 33
  },
  {
    _id: "38c3e71f-post-34",
    content:
      "The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become",
    mediaUrl: "",
    username: "gautamkp078",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Gautam",
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-15T13:10:34+05:30",
    updatedAt: formatDate(),
    id: 34
  },
  {
    _id: "d262ed67-post-35",
    content: "Coding is not just a job; it's a passion, a way of life.",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1690819515/TechTribe/PostsImg/Post-10.jpg",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "gautamkp078",
    firstName: "Gautam",
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-13T13:10:34+05:30",
    updatedAt: formatDate(),
    id: 35
  },
  {
    _id: "b1c06d60-post-36",
    content:
      "If you ever feel useless, remember that there's a null in JavaScript. 😅",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1690819512/TechTribe/PostsImg/postt-9.jpg",
    username: "gautamkp078",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Gautam",
    lastName: "Pandey",
    userId: "6d4b8b1d-gautam-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    createdAt: "2023-07-13T13:10:44+05:30",
    updatedAt: formatDate(),
    id: 36
  },
  {
    _id: "a0e17b1d-post-37",
    content:
      "Suggest some songs (and also mention the genre) please, I need them to burn through coding hours at work.",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "dineshisreal",
    firstName: "Dinesh",
    lastName: "Chugtai",
    userId: "a2f3b1fd-dineshisreal-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687079617/TechTribe/UsersProfile/dinesh.jpg",
    id: 37,
    createdAt: "2023-05-11T10:20:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "7c015944-post-38",
    content: "Do you pronounce it as gif or gif? ",
    mediaUrl: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "dineshisreal",
    firstName: "Dinesh",
    lastName: "Chugtai",
    userId: "a2f3b1fd-dineshisreal-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687079617/TechTribe/UsersProfile/dinesh.jpg",
    id: 38,
    createdAt: "2023-07-13T13:10:44+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "3e55b1bc-post-39",
    content:
      "Back in Pakistan with my family. Sorry for the hiatus. Stay safe everyone!",
    mediaUrl: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "dineshisreal",
    firstName: "Dinesh",
    lastName: "Chugtai",
    userId: "a2f3b1fd-dineshisreal-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1687079617/TechTribe/UsersProfile/dinesh.jpg",
    id: 39,
    createdAt: "2023-07-18T13:10:44+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "942a2327-post-40",
    content:
      "You may not like it, but the 𝕏 rename is very likely to stick and if you keep calling it Twitter eventually you'll be one of the few who do. I'm guessing by sometime next year...",
    mediaUrl: "",
    username: "@kentcdodds",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Kent",
    lastName: "C.Dodds",
    userId: "684e8f8b-kentcdodds-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725626/TechTribe/UsersProfile/kentcdodds.jpg",
    id: 40,
    createdAt: "2023-06-11T11:10:35+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "660c03f3-post-41",
    content:
      "Event loop is a confusing concept in JavaScript.You can better understand code execution if you understand it. Here's everything you need to know about it:",
    mediaUrl: "",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Kent",
    lastName: "C.Dodds",
    userId: "684e8f8b-kentcdodds-userId",
    username: "@kentcdodds",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725626/TechTribe/UsersProfile/kentcdodds.jpg",
    id: 41,
    createdAt: "2023-06-11T15:25:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "8d55d5fe-post-42",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691666413/TechTribe/PostsImg/post-20.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Akshay",
    lastName: "Saini",
    username: "akshaymarch7",
    userId: "f6379c68-akshay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725846/TechTribe/UsersProfile/akshaymarch7.jpg",
    id: 42,
    createdAt: "2023-05-13T13:22:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "5252d42d-post-43",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691664660/TechTribe/PostsImg/post-12.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Akshay",
    lastName: "Saini",
    username: "akshaymarch7",
    userId: "f6379c68-akshay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725846/TechTribe/UsersProfile/akshaymarch7.jpg",
    id: 43,
    createdAt: "2023-07-11T13:21:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "e6de4333-post-44",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691664861/TechTribe/PostsImg/post-13.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    firstName: "Akshay",
    lastName: "Saini",
    username: "akshaymarch7",
    userId: "f6379c68-akshay-userId",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686725846/TechTribe/UsersProfile/akshaymarch7.jpg",
    id: 44,
    createdAt: "2023-06-11T11:20:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "44d468d6-post-45",
    content: "Rate this setup",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691666199/TechTribe/PostsImg/post-18.jpg",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "6d4b8b1d-gautam-userId",
    firstName: "Gautam",
    lastName: "Pandey",
    username: "gautamkp078",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    id: 45,
    createdAt: "2023-06-11T15:20:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "8dcdbf20-post-46",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691666199/TechTribe/PostsImg/post-16.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "6d4b8b1d-gautam-userId",
    firstName: "Gautam",
    lastName: "Pandey",
    username: "gautamkp078",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    id: 46,
    createdAt: "2023-06-11T11:11:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "9a7e89d4-post-47",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691666197/TechTribe/PostsImg/post-19.jpg",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "6d4b8b1d-gautam-userId",
    firstName: "Gautam",
    lastName: "Pandey",
    username: "gautamkp078",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    id: 47,
    createdAt: "2023-08-01T13:10:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "75e5d8f1-post-48",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691666155/TechTribe/PostsImg/post-15.jpg",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "6d4b8b1d-gautam-userId",
    firstName: "Gautam",
    lastName: "Pandey",
    username: "gautamkp078",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    id: 48,
    createdAt: "2023-06-11T10:20:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "e1a5b8cd-post-49",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691665728/TechTribe/PostsImg/post-14.jpg",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "6d4b8b1d-gautam-userId",
    firstName: "Gautam",
    lastName: "Pandey",
    username: "gautamkp078",
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    id: 49,
    createdAt: "2023-06-11T10:20:34+05:30",
    updatedAt: formatDate()
  },
  {
    _id: "2c5d9df2-post-50",
    content: "",
    mediaUrl:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1691666197/TechTribe/PostsImg/post-19.jpg",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    userId: "6d4b8b1d-gautam-userId",
    firstName: "Gautam",
    lastName: "Pandey",
    username: "gautamkp078",
    createdAt: "2023-08-11T13:20:34+05:30",
    updatedAt: formatDate(),
    profileImage:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1686728648/TechTribe/UsersProfile/gautamkp078.jpg",
    id: 50
  }
];
