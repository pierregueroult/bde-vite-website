const container = document.querySelector(".container-0");

const links = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/bde_labete/?hl=fr",
    description:
      "Retrouver toutes les photos des événements du BDE, ainsi que toutes les annonces importantes.",
    icon: `<i class="fa-brands fa-instagram text-2xl"></i>`,
  },
  {
    label: "Discord",
    url: "https://discord.com/invite/Nd72pzWyFg",
    description:
      "Rejoignez le serveur Discord du BDE pour discuter avec les autres étudiants, retrouver les emplois du temps, les annonces importantes, et bien plus encore !",
    icon: `<i class="fa-brands fa-discord text-2xl"></i>`,
  },
  {
    label: "Les choses à faire à Elbeuf",
    url: "https://www.google.com/maps/d/u/0/edit?mid=1LTF2Sa8suxSsMEBLGrj2r9tHTKXgMyw&usp=sharing",
    description:
      "Retrouve sur cette carte toutes les choses à faire à Elbeuf, que ce soit pour manger, pour se divertir, faire du sport, etc.",
    icon: `<i class="fa-solid fa-map-pin"></i>`,
  },
  {
    label: "Le site de l'université",
    url: "https://www.univ-rouen.fr/",
    description:
      "Le voici, le voilà. Le site de l'IUT ça peut toujours être utile, on sait jamais, des fois ...",
    icon: `<i class="fa-solid fa-globe text-2xl"></i>`,
  },
  {
    label: "L'Espace Numérique de Travail",
    url: "https://ent.univ-rouen.fr/",
    description:
      "L'ENT, ce site super utiles pour les cours, les notes, les emplois du temps (il parait).",
    icon: `<i class="fa-solid fa-laptop text-2xl"></i>`,
  },
];

const socialLinks = links.map((link, i) => {
  return `<li
    class="bg-indigo-800 p-4 rounded-lg w-full text-white appear appear-delay-${i} opacity-0">
      <a href="${link.url}" target="_blank" rel="noopener noreferrer">
        <div class="flex flex-row items-center gap-4">
          ${link.icon}
          <h3 class="text-xl font-bold">${link.label}</h3>
        </div>
        <p class="text-sm mt-2">${link.description}</p>
      </a>
    </li>`;
});

container.innerHTML += `<ul
  class="flex flex-col gap-4 w-11/12 mx-auto pb-16"
>${socialLinks.join("")}</ul>`;
