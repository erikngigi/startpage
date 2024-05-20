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
      { name: "Alx", url: "https://member.theroom.com/alx/" },
      {
        name: "ericwanyoike",
        url: "https://mail.google.com/mail/u/?authuser=ericwanyoike@gmail.com",
      },
      {
        name: "ericmosesngigi",
        url: "https://mail.google.com/mail/u/?authuser=ericmosesngigi@gmail.com",
      },
    ],
  },
  {
    title: "Dev",
    id: "dev-container",
    links: [
      { name: "MDN Docs", url: "https://developer.mozilla.org/en-US/" },
      { name: "Javascript.info", url: "https://Javascript.info/" },
      { name: "Localhost", url: "http://localhost:8000" },
      { name: "Aws Console", url: "https://aws.amazon.com/console/" },
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
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  bookmarks.forEach((category) => {
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
