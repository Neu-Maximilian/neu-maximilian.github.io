import ExpertiseCard from "./ExpertiseCard";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const MyExpertise = () => {
    const { isLoading, error, data } = useQuery("expertise", () =>
        Promise.resolve([
            {
                id: 0,
                title: "Automatisation Intelligente",
                desc:
                    "Création de solutions sur mesure avec PowerShell, Bash et Python pour optimiser vos processus métier.",
            },
            {
                id: 1,
                title: "Infrastructure & Solutions Cloud",
                desc:
                    "Déploiement et gestion d'infrastructures robustes avec MECM, TREND et Grafana pour une supervision efficace.",
            },
            {
                id: 2,
                title: "Innovation DevOps",
                desc:
                    "Orchestration de conteneurs avec Kubernetes et virtualisation avancée pour des déploiements agiles et performants.",
            },
            {
                id: 3,
                title: "Développement Multi-Plateformes",
                desc:
                    "Conception d'applications modernes et performantes en C#, C++, JavaScript, Dart et Rust.",
            },
            {
                id: 4,
                title: "Sécurité & Connectivité",
                desc:
                    "Protection et interconnexion de vos systèmes avec OPNsense, OpenVPN et solutions VPN nouvelle génération.",
            },
            {
                id: 5,
                title: "Développement Augmenté",
                desc:
                    "Utilisation des dernières technologies d'IA et outils de développement pour une productivité maximale.",
            },
        ])
    );

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
                Mes expertises
            </div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
                {isLoading
                    ? [1, 2, 3, 4, 5, 6].map((key) => (
                            <ParagraphSkeleton key={key} className={"space-y-2 p-8"} />
                        ))
                    : data?.map((data, key) => <ExpertiseCard key={key} data={data} />)}
            </div>
        </>
    );
};

export default MyExpertise;
