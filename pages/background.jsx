import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

const staticData = {
  eduCards: [
    {
      id: 0,
      title: "CCI Campus Alsace",
      degree: "BTS SIO (Services Informatiques aux Organisations)",
      detail:
        "BTS SIO, avec spécialité en Systèmes et Réseaux. En alternance, avec l'entreprise Hôpitaux Civils de Colmar.",
      year: "2023-2025",
    },
    {
      id: 1,
      title: "Université de Haute-Alsace",
      degree: "Licence Informatique",
      detail:
        "Licence Informatique, avec spécialité en Informatique et Mathématiques Appliquées. Validation de la L1, L2 non poursuivie.",
      year: "2022-2023",
    },
    {
      id: 2,
      title: "Lycée La Bourdonnais",
      degree: "Baccalauréat, Général",
      detail:
        "Baccalauréat Général, avec spécialité en NSI (Numérique et Sciences Informatiques), Physique-Chimie et Mathématiques.",
      year: "2010-2022",
    },
  ],
  expCards: [
    {
      id: 1,
      title: "Hôpitaux Civils de Colmar",
      role: "Administrateur Systèmes (alternant)",
      url: "https://ch-colmar.fr/",
      desc: "Développement solutions info, dont un système de messagerie. Mise en place/gestion MECM, TREND, et solutions hospitalières.",
      year: "09/2023 - Present",
      location: "Colmar, France",
    },
    {
      id: 2,
      title: "U-Logistique",
      role: "Préparateur de commande",
      url: "https://www.u-logistique.com/",
      desc: "Assurer la réception, le stockage, la préparation de marchandises. Utilisation d'un chariot. Maintien des consignes de sécurités.",
      year: "01/2023 - 07/2023",
      location: "Mulhouse, France",
    },
  ],
};

function Background() {
  const isLoading = false;
  const data = staticData;

  return (
    <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
      <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
        <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
          Education
        </div>
        {isLoading
          ? [1, 2, 3].map((_, index) => (
              <ParagraphSkeleton
                key={index}
                className={"p-8 h-full w-full relative"}
              />
            ))
          : data?.eduCards?.map((data, key) => (
              <Edu_Card key={key} data={data} />
            ))}
      </div>
      <div className="order-1 md:order-2">
        <div className="flex flex-col gap-y-4 md:ml-12">
          <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">
            Experience
          </div>

          {isLoading
            ? [1, 2, 3].map((_, index) => (
                <ParagraphSkeleton
                  key={index}
                  className={"p-8 h-full w-full relative"}
                />
              ))
            : data?.expCards?.map((data, key) => (
                <Exp_Card key={key} data={data} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Background;
