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
        name: AboutSubMenuNames.bio,
        items: [
          {
            name: "myBio",
            description: `I'm Bruno Mileto, FullStack Developer, located at Brazil, 
              with 2+ years of experience. I worked and studied different technologies, 
              during this time. I currently work professionally using C# / ASP.NET 
              and ReactJs.
              I was introduced to the Dev world by a professor during my mechanical 
              engineering bachelor. I still finished the course and even worked 
              two years as a mechanical engineer but I decided to change my career 
              and became a Dev.
              First, I studied and did freelancer projects with Python and Django 
              and, through those projects, I got a job as a Dev. The company uses 
              Delphi and C# /ASP.Net, and I did projects and client support for a 
              legacy business management system.
              Later, I was contacted via LinkedIn to participate in a selection 
              process at my current company. Here, we develop custom projects for 
              customers. In those projects, we participate in the whole life time, 
              from planning to implementation and, obviously, going through its 
              development. Here, we use internal frameworks, C# / ASP.NET and 
              Javascript.
              Finally, I still do freelance. As a freelance, I develop websites, 
              usually landing pages and SPAs, using pure HTML/CSS/Javascript, 
              bootstrap, webflow and, recently, ReactJs.
              `,
          },
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
        name: AboutSubMenuNames.interests,
        items: [
          { name: "sports", description: "alsdkjaksjdlkasd" },
          { name: "technology", description: "ajksdhkajsdhkajsh" },
          { name: "daily", description: "ajksdhkajsdhkajsh" },
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
