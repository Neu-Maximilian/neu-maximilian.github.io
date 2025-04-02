import Typewriter from "typewriter-effect";
import BannerLayout from "../Common/BannerLayout";

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl text-Snow font-bold">
                Salut, c&apos;est Maximilian
              </h1>
            </div>
            <div className="py-4 font-cascadia-normal text-Snow pb-4 text-2xl sm:text-4xl h-20 lg:h-auto">
              <span>
                <span className="text-Green"># </span>
                <span>
                  <span className="inline-block">
                    <Typewriter
                      options={{
                        strings: [
                          "Créateur De Solutions",
                          "Explorateur Numérique",
                          "Rêveur Ambitieux",
                          "Apprenant Perpétuel",
                          "Passionné De Design",
                          "Résolveur De Problèmes",
                          "Voyageur Occasionnel",
                          "Observateur Curieux",
                          "Collectionneur D'Idées",
                          "Expérimentateur Constant",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
