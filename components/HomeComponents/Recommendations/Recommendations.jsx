import RecommendationCard from "./RecommendationCard";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const recommendationCard = [
  {
    id: 0,
    name: "Eddine SAOULI",
    image: "images/eddine-emoji.png",
    designation: "NixOs | GrapheneOS | MECM",
    view: "Bonjour, je recommande vivement Maximilian NEU pour ses compétences en installation et configuration de systèmes d'exploitation Linux, Android et Windows. Il a une connaissance approfondie de la gestion des systèmes d'exploitation et des réseaux informatiques.",
    linkednURL: "https://www.linkedin.com/in/eddine-su-645496278/",
  },
  {
    id: 1,
    name: "Julien BORREGAN",
    image: "images/julien-emoji.png",
    designation: "Développeur Fullstack | Administrateur Systèmes et Réseaux",
    view: "M. NEU est toujours aussi exemplaire dans les tâches qui lui sont demandées. Il sait parfaitement répondre aux demandes qui lui sont faites et s'avère force de proposition dans l'amélioration pro-active des solutions qu'il propose. Qu'il continue ainsi, c'est du très bon travail !",
    linkednURL: "https://www.linkedin.com/in/julien-borregan-93b8b116b",
  },
];

const Recommendations = () => {
  // const { isLoading, error, data } = useQuery('recommendations', () =>
  //     axios.get('api/recommendations')
  //         .then(({ data }) => data)
  //         .catch(error => console.error('Error fetching testimonials:', error)))

  const data = recommendationCard;
  const isLoading = false;

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        Recommandations
      </div>
      <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
        {isLoading
          ? [1, 2, 3, 4].map((key) => (
              <ParagraphSkeleton
                key={key}
                className={"p-8 h-full w-full relative"}
              />
            ))
          : data?.map((data, key) => (
              <RecommendationCard key={key} data={data} />
            ))}
      </div>
    </>
  );
};
export default Recommendations;
