// bookmarks.js

const bookmarks = [
  {
    title: "Social",
    id: "social-container",
    links: [
      { name: "Twitter", url: "https://www.twitter.com" },
      { name: "Reddit", url: "https://reddit.com" },
      { name: "Github", url: "https://github.com/ErikNgigi" },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/eric-ngigi-073b72153/",
      },
      { name: "Chess", url: "https://www.chess.com/home" },
      { name: "ALX", url: "https://member.theroom.com/alx/" },
      { name: "ChatGPT", url: "https://chat.openai.com/" },
    ],
  },
  {
    title: "Dev",
    id: "dev-container",
    links: [
      { name: "Localhost", url: "http://localhost:8000" },
      { name: "Aws Console", url: "https://aws.amazon.com/console/" },
      { name: "App Eraser", url: "https://app.eraser.io/dashboard/all" },
      { name: "Heroku", url: "https://dashboard.heroku.com/" },
      { name: "Calc", url: "https://calc.ericngigi.com/" },
      { name: "AirfloSciences", url: "https://airflosciences.com" },
      { name: "Eric Ngigi", url: "https://ericngigi.com" },
    ],
  },
  {
    title: "Read",
    id: "reading-container",
    links: [
      { name: "Libgen", url: "https://libgen.is/" },
      { name: "Aws Docs", url: "https://docs.aws.amazon.com/" },
      {
        name: "Terraform",
        url: "https://developer.hashicorp.com/terraform",
      },
      {
        name: "Terraform Aws",
        url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs",
      },
    ],
  },
  {
    title: "Linux",
    id: "linux-container",
    links: [
      { name: "Explainshell", url: "https://explainshell.com/" },
      { name: "Arch Wiki", url: "https://wiki.archlinux.org/" },
      { name: "Cpanel", url: "https://exams.cpanel.net/dashboard" },
      { name: "Roadmaps", url: "https://roadmap.sh/" },
      { name: "Distrowatch", url: "https://distrowatch.com/" },
      { name: "Unix Porn", url: "https://www.reddit.com/r/unixporn/" },
    ],
  },
  {
    title: "Watch",
    id: "watch-container",
    links: [
      { name: "YouTube", url: "https://youtube.com" },
      { name: "Pahe", url: "https://pahe.ink" },
      { name: "Nyaa", url: "https://nyaa.si/" },
      { name: "Anitaku", url: "https://anitaku.io/" },
      { name: "The Pirate Bay", url: "https://thepiratebay.org/index.html" },
      { name: "1337X", url: "https://1337x.to/" },
      { name: "9Anime", url: "https://9animetv.to/" },
      { name: "Netflix", url: "https://netflix.com/" },
    ],
  },
  {
    title: "Email",
    id: "email-container",
    links: [
      {
        name: "EricWanyoike",
        url: "https://mail.google.com/mail/u/?authuser=ericwanyoike@gmail.com",
      },
      {
        name: "EricMosesNgigi",
        url: "https://mail.google.com/mail/u/?authuser=ericmosesngigi@gmail.com",
      },
      {
        name: "EricTheGiggs",
        url: "https://mail.google.com/mail/u/?authuser=ericthegiggs@gmail.com",
      },
      {
        name: "EricWanyoike772",
        url: "https://mail.google.com/mail/u/?authuser=ericwanyoike772@gmail.com",
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  bookmarks.forEach((category) => {
    // Sort the links alphabetically by name
    category.links.sort((a, b) => a.name.localeCompare(b.name));

    const container = document.getElementById(category.id);
    const linksDiv = container.querySelector(".links");

    category.links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.name;
      linksDiv.appendChild(anchor);
    });
  });
});
