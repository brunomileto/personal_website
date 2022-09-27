export enum AboutMenuNames {
  personalInfo = "personal_info",
  contacts = "contacts",
}

export enum AboutSubMenuNames {
  bio = "bio",
  interests = "interests",
  education = "education",
}

interface Menu {
  name: AboutMenuNames;
  subMenu: SubMenu[];
}

interface SubMenu {
  name: AboutSubMenuNames;
  items: SubMenuItens[];
}

export interface SubMenuItens {
  name: string;
  description: string;
}

export const aboutMenu: Menu[] = [
  {
    name: AboutMenuNames.personalInfo,
    subMenu: [
      {
        name: AboutSubMenuNames.interests,
        items: [
          { name: "sports", description: "alsdkjaksjdlkasd" },
          { name: "technology", description: "ajksdhkajsdhkajsh" },
          { name: "daily", description: "ajksdhkajsdhkajsh" },
        ],
      },
      {
        name: AboutSubMenuNames.education,
        items: [
          { name: "university", description: "alsdkjaksjdlkasd" },
          { name: "courses", description: "ajksdhkajsdhkajsh" },
        ],
      },
      {
        name: AboutSubMenuNames.bio,
        items: [
          {
            name: "myBio",
            description:
              "I have 5 years of experience in web development" +
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
              "sed do eiusmod tempor incididunt ut labore et dolore" +
              "magna aliqua. Ut enim ad minim veniam, quis nostrud " +
              "exercitation ullamco laboris" +
              "nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
              "dolor in reprehenderit in. Duis aute irure dolor in " +
              "reprehenderit in voluptate velit esse cillum dolore eu " +
              "fugiat nulla pariatur. Excepteur sint occaecat officia " +
              "deserunt mollit anim id est laborum.",
          },
        ],
      },
    ],
  },
  { name: AboutMenuNames.contacts, subMenu: [] },
];

// export const aboutMenus = {
//   personalInfo: {
//     name: AboutMenu.personalInfo,
//     subMenus: {
//       bio: {
//         name: "bio",
//         description:
//           "I have 5 years of experience in web development" +
//           "lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
//           "sed do eiusmod tempor incididunt ut labore et dolore" +
//           "magna aliqua. Ut enim ad minim veniam, quis nostrud " +
//           "exercitation ullamco laboris" +
//           "nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
//           "dolor in reprehenderit in. Duis aute irure dolor in " +
//           "reprehenderit in voluptate velit esse cillum dolore eu " +
//           "fugiat nulla pariatur. Excepteur sint occaecat officia " +
//           "deserunt mollit anim id est laborum.",
//       },
//       interests: {
//         name: "interests",
//         items: {
//           sports: {
//             name: "sports",
//             description: "alsdkjaksjdlkasd",
//           },
//           technology: {
//             name: "technology",
//             description: "ajsdoijqoiwjdoq",
//           },
//           daily: {
//             name: "daily",
//             description: "lalksjdklasjd",
//           },
//         },
//       },
//       education: {
//         name: "education",
//         items: {
//           university: {
//             name: "university",
//             description: "lajkshdkjajlsndlk",
//           },
//           courses: {
//             name: "courses",
//             description: "asdasdasdasd",
//           },
//         },
//       },
//     },
//   },
//   contacts: {
//     name: AboutMenu.contacts,
//     email: "brunomileto@outlook.com",
//     phone: "+5562992861675",
//     subMenus: {},
//   },
// };
