import PortfolioCard from "../components/Portfolio/PortfolioCard";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const staticData = [
  {
    id: 0,
    projectName: "AP3",
    url: "https://github.com/Neu-Maximilian/doc-ap3",
    image: "",
    projectDetail:
      "Un projet réalisé dans le cadre du BTS SIO, il s'agit d'un maquettage d'un parc informatique. Avec un vpn site à site, un serveur de fichier, etc...",
    technologiesUsed: [
      {
        tech: "Active Directory",
      },
      {
        tech: "DNS",
      },
      {
        tech: "DHCP",
      },
      {
        tech: "Group Policy",
      },
      {
        tech: "Windows Server 2022",
      },
      {
        tech: "Windows 10",
      },
      {
        tech: "VPN",
      },
      {
        tech: "Serveur de fichier",
      },
    ],
  },
  {
    id: 1,
    projectName: "AP4",
    url: "https://github.com/Neu-Maximilian/doc-ap4",
    image: "/images/portfolio/ap4.png",
    projectDetail:
      "Simulation d'un parc informatique utilisant MECM, Grafana et divers outils pour la gestion et la supervision.",
    technologiesUsed: [
      {
        tech: "MECM",
      },
      {
        tech: "Grafana",
      },
      {
        tech: "Elastic Security",
      },
      {
        tech: "Dynfi",
      },
      {
        tech: "VLAN",
      },
      {
        tech: "OpenVPN",
      },
      {
        tech: "Powershell",
      },
      {
        tech: "Windows Server",
      },
    ],
  },
  {
    id: 2,
    projectName: "Portfolio",
    url: "https://github.com/Neu-Maximilian/neu-maximilian.github.io",
    image: "/images/portfolio/portfolio.png",
    projectDetail:
      "Mon portfolio en ligne, développé avec Next.js et Tailwind CSS. Il permet de présenter mes projets et compétences de manière interactive.",
    technologiesUsed: [
      {
        tech: "Next.js",
      },
      {
        tech: "Tailwind CSS",
      },
      {
        tech: "JavaScript",
      },
      {
        tech: "React",
      },
      {
        tech: "ParicleJS",
      },
      {
        tech: "HTML",
      },
      {
        tech: "CSS",
      },
    ],
  },
];

const Portfolio = () => {
  const isLoading = false;
  const data = staticData;

  return (
    <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
      {isLoading
        ? [1, 2, 3, 4].map(() => (
            <ImageAndParagraphSkeleton
              key={Math.random()}
              className={"w-full object-cover"}
            />
          ))
        : data?.map((data, key) => <PortfolioCard key={key} data={data} />)}
    </div>
  );
};

export default Portfolio;
