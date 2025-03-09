export const projectsData: {
  projectName: string;
  projectImgUrlList: { imageUrl: string; imageAlt: string }[];
  projectDescription: string;
  projectTechnologyList: { name: string; link: string }[];
  projectGithubLink: string;
  projectLink?: string;
}[] = [
  {
    projectName: "The Next Typer",
    projectImgUrlList: [
      {
        imageUrl:
          "https://github.com/LeightonGuang/typing_test_react_app/blob/develop/_assets/screenshots/homePage.png?raw=true",
        imageAlt: "Home Page",
      },
    ],
    projectDescription: `The Next Typer is a feature rich typing test website built with Next.js, 
                        Shadcn and Recharts. Test your speed and accuracy and track your progress with Recharts. 
                        This revamped version enahances the original typing test website using technologies I've recently learned.`,
    projectTechnologyList: [
      { name: "React", link: "https://react.dev" },
      { name: "Next.js", link: "https://nextjs.org" },
      { name: "Typescript", link: "https://www.typescriptlang.org" },
      { name: "Tailwind", link: "https://tailwindcss.com" },
      { name: "Shadcn", link: "https://ui.shadcn.com" },
      { name: "Recharts", link: "https://recharts.org" },
    ],
    projectGithubLink: "https://github.com/LeightonGuang/typing_test_react_app",
    projectLink: "https://thenexttyper.netlify.app",
  },
  {
    projectName: "Valo Bunker",
    projectImgUrlList: [
      {
        imageUrl:
          "https://github.com/LeightonGuang/ValoBunker/blob/main/public/assets/screenshots/homePage.png?raw=true",
        imageAlt: "Home Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/ValoBunker/blob/main/public/assets/screenshots/playersPage.png?raw=true",
        imageAlt: "Players Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/ValoBunker/blob/main/public/assets/screenshots/teamsPage.png?raw=true",
        imageAlt: "Teams Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/ValoBunker/blob/main/public/assets/screenshots/agentPage.png?raw=true",
        imageAlt: "Agent Page",
      },
    ],
    projectDescription:
      "Valo Bunker is a website for Valorant players. Providing information about agents, abilities and more.",
    projectTechnologyList: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "HeroUI", link: "https://www.heroui.com/" },
      { name: "Supabase", link: "https://supabase.com/" },
    ],
    projectGithubLink: "https://github.com/LeightonGuang/comparedecks",
    projectLink: "https://valobunker.netlify.app/",
  },
  {
    projectName: "Compare Decks",
    projectImgUrlList: [
      {
        imageUrl:
          "https://github.com/LeightonGuang/CompareDecks/raw/main/src/_assets/images/comparedecksPage.png",
        imageAlt: "Home Page",
      },
    ],
    projectDescription:
      "Compare Decks is a web application comparison tool for comparing whatever you want, whether it be products, books, movies, card games, services, or anything else.",
    projectTechnologyList: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "Supabase", link: "https://supabase.com/" },
    ],
    projectGithubLink: "https://github.com/LeightonGuang/comparedecks",
    projectLink: "https://comparedecks.netlify.app/",
  },
  {
    projectName: "Q bot",
    projectImgUrlList: [
      {
        imageUrl:
          "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help.png",
        imageAlt: "help command",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-account.png",
        imageAlt: "help account command",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-valorant.png",
        imageAlt: "help valorant command",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/Q-bot/raw/main/README/screenShots/help-private-vc.png",
        imageAlt: "help private voice channel command",
      },
    ],
    projectDescription:
      "Q bot is a discord bot that allows you to check your Valorant stats, manage Valorant accounts you've added, create private voice channels in the server, and more.",
    projectTechnologyList: [
      { name: "Node.js", link: "https://nodejs.org/en/" },
      { name: "JavaScript", link: "https://www.javascript.com/" },
      { name: "Axios", link: "https://axios-http.com/" },
      { name: "cheerio", link: "https://cheerio.js.org/" },
      { name: "discord.js", link: "https://old.discordjs.dev" },
      { name: "puppeteer", link: "https://pptr.dev/" },
    ],
    projectGithubLink: "https://github.com/LeightonGuang/Q-bot",
  },
  {
    projectName: "Shopdex",
    projectImgUrlList: [
      {
        imageUrl:
          "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/home.png",
        imageAlt: "Home Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/productpage.png",
        imageAlt: "Product Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/categories.png",
        imageAlt: "Categories Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/saved.png",
        imageAlt: "Saved Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/register.png",
        imageAlt: "Register Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/capstone-project/raw/main/README/screenshots/login.png",
        imageAlt: "Login Page",
      },
    ],
    projectDescription:
      "Shopdex is an e-commerce tool that enables customers to compare prices between shops in their locality, and businesses to create product listings.",
    projectTechnologyList: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "Sass", link: "https://sass-lang.com/" },
      { name: "HTML", link: "" },
      { name: "CSS", link: "" },
      { name: "JavaScript", link: "https://www.javascript.com/" },
    ],
    projectGithubLink: "https://github.com/LeightonGuang/capstone-project",
  },
  {
    projectName: "Shopdex API and database",
    projectImgUrlList: [
      {
        imageUrl:
          "https://www.nairaland.com/attachments/16116667_api_png1ab24127fdc57af104f0130205baef40",
        imageAlt: "API",
      },
    ],
    projectDescription: "A RESTful API and database made for Shopdex.",
    projectTechnologyList: [
      { name: "Node.js", link: "https://nodejs.org/en/" },
      { name: "JavaScript", link: "https://www.javascript.com/" },
      { name: "Express", link: "https://expressjs.com/" },
      { name: "MySQL", link: "https://www.mysql.com/" },
      { name: "Knex", link: "https://knexjs.org/" },
    ],
    projectGithubLink:
      "https://github.com/LeightonGuang/leighton-guang-capstone-api",
  },
  {
    projectName: "British Airways Hackathon",
    projectImgUrlList: [
      {
        imageUrl:
          "https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/home.png",
        imageAlt: "Home Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/personalise.png",
        imageAlt: "Personalise Page",
      },
      {
        imageUrl:
          "https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon/raw/main/README/screenshots/result.png",
        imageAlt: "Result Page",
      },
    ],
    projectDescription:
      "A 24-hour hackathon hosted by British Airways where I collaborated with UI/UX Designers, data scientist and software engineers to develop a solution to solve the problem of 'How might we encourage customers to book flights using their travel voucher?'",
    projectTechnologyList: [
      { name: "React", link: "https://reactjs.org/" },
      { name: "Sass", link: "https://sass-lang.com/" },
      { name: "HTML", link: "" },
      { name: "CSS", link: "" },
      { name: "JavaScript", link: "https://www.javascript.com/" },
      { name: "Tailwindcss", link: "https://tailwindcss.com/" },
      { name: "Figma", link: "https://www.figma.com/" },
    ],
    projectGithubLink:
      "https://github.com/LeightonGuang/aero-dynamic-british-airways-frontend-hackathon",
  },
  {
    projectName: "Typing test website",
    projectImgUrlList: [
      {
        imageUrl:
          "https://user-images.githubusercontent.com/41440634/212241316-4c0d389e-d85f-4ecb-a925-8ae4ac1140c4.png",
        imageAlt: "Typing Test Website Screenshot",
      },
    ],
    projectDescription:
      "A website that evalulate your typing speed in words per minute (WPM).",
    projectTechnologyList: [
      { name: "HTML", link: "" },
      { name: "CSS", link: "" },
      { name: "JavaScript", link: "https://www.javascript.com/" },
    ],
    projectGithubLink: "https://github.com/LeightonGuang/typing_test",
    projectLink: "https://leightontypingtest.netlify.app/",
  },
];
