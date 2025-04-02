import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [german, setGerman] = useState(0)
    const [french, setFrench] = useState(0)
    const [english, setEnglish] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (english < 93) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (french < 91) {
                setFrench(prevCount => prevCount + 1);
            }
            if (german < 58) {
                setGerman(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [english, french, german]);
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Langues</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={50} />
                        <span className='text-xs font-bold text-Snow'>Anglais</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={french} size={50} />
                        <span className='text-xs font-bold text-Snow'>Français</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={german} size={50} />
                        <span className='text-xs font-bold text-Snow'>Allemand</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Languages