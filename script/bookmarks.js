// bookmarks.js

const bookmarks = [
  {
    title: "Dev-01",
    id: "social-container",
    links: [
      { name: "Github", url: "https://github.com/ErikNgigi" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/eric-ngigi-073b72153/" },
      { name: "Chess", url: "https://www.chess.com/home" },
      { name: "ALX", url: "https://member.theroom.com/alx/" },
      { name: "ChatGPT", url: "https://chat.openai.com/" },
      { name: "Pepperstone", url: "https://pepperstone.com/en-af/" },
      { name: "Fiverr", url: "https://fiverr.com" },
      { name: "Upwork", url: "https://upwork.com" },
      { name: "Cloudflare", url: "https://dash.cloudflare.com/login" },
      { name: "DigitalOcean", url: "https://cloud.digitalocean.com/login" },
      { name: "Cloudflare Docs", url: "https://developers.cloudflare.com/" },
      { name: "DigitalOcean Docs", url: "https://docs.digitalocean.com/reference/" },
    ],
  },
  {
    title: "Dev-02",
    id: "dev-container",
    links: [
      { name: "Hugo", url: "http://localhost:3000" },
      { name: "Hugo Tina", url: "http://localhost:3001" },
      { name: "Python", url: "http://localhost:8000" },
      { name: "Aws Console", url: "https://aws.amazon.com/console/" },
      { name: "App Eraser", url: "https://app.eraser.io/dashboard/all" },
      { name: "Draw.io", url: "https://app.diagrams.net/" },
      { name: "Calc", url: "https://calc.ericngigi.xyz/" },
      { name: "AirfloSciences", url: "https://airflosciences.com" },
      { name: "Eric Ngigi", url: "https://ericngigi.com/" },
      { name: "Docker Hub", url: "https://hub.docker.com/" },
      { name: "HCP Terraform", url: "https://app.terraform.io/" },
      { name: "Namecheap", url: "https://namecheap.com/" },
    ],
  },
  {
    title: "Read",
    id: "reading-container",
    links: [
      { name: "Libgen", url: "https://libgen.is/" },
      { name: "Aws Docs", url: "https://docs.aws.amazon.com/" },
      { name: "Terraform Docs", url: "https://developer.hashicorp.com/terraform/docs" },
      { name: "Terraform Providers", url: "https://registry.terraform.io/browse/providers" },
      { name: "Docker Docs", url: "https://docs.docker.com/" },
      { name: "SpaceLift", url: "https://spacelift.io/" },
      { name: "AWSInsider", url: "https://awsinsider.net/Home.aspx" },
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
      { name: "Linux Journey", url: "https://linuxjourney.com/" },
    ],
  },
  {
    title: "Download/Watch",
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
      { name: "Kitsu", url: "https://kitsu.io/explore/anime" },
    ],
  },
  {
    title: "Email Accounts",
    id: "email-container",
    links: [
      { name: "ericwanyoike@gmail.com", url: "https://mail.google.com/mail/u/?authuser=ericwanyoike@gmail.com" },
      { name: "ericmosesngigi@gmail.com", url: "https://mail.google.com/mail/u/?authuser=ericmosesngigi@gmail.com" },
      { name: "ericthegiggs@gmail.com", url: "https://mail.google.com/mail/u/?authuser=ericthegiggs@gmail.com" },
      { name: "ericwanyoike772@gmail.com", url: "https://mail.google.com/mail/u/?authuser=ericwanyoike772@gmail.com" },
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
