
import Api from "../service/Api"
import { useEffect, useState } from "react"
import PairDexscreener from "./interfaces/PairInterface"

import TypicalComponent from "./home-components/TypicalComponent"
import Roadmap from "./home-components/Roadmap"
import BuyComponent from "./home-components/BuyComponent"
import Footer from "./Footer"
import Statistics from "./home-components/Statistics"




const Home: React.FC = () => {

    let [data, setData] = useState<PairDexscreener>();


    useEffect(() => {
        let getData = async () => {
            let api = new Api();
            const data = await api.fetchDexScreener();
            setData(data.pair)


        }
        if (!data) {
            getData()
        }

    }, [data])

    return (
        <div className="w-full bg-black relative flex flex-col justify-center items-center" >



            <TypicalComponent />

            <div className="w-full border-2 border-black lg:text-xl quick-desc">
                <div className="bg-black w-full p-4">
                    <p className="text-center bg-[#ee8c3a] rounded-lg shadow-xl text-white md:text-lg lg:text-xl font-semibold px-4 py-10 lg:px-20 ">
                        Embracing the spirit of community hilarity, $BOBS is more than just a meme coin on the Avalanche network; it's a digital symphony of laughter and camaraderie. Created to infuse joy into the crypto space, $BOBS stands as a testament to the whimsical fusion of blockchain and meme culture.
                    </p>
                </div>
            </div>
            <Roadmap />
            <BuyComponent />
            <Statistics data={data} />
            <Footer />
        </div>
    )
}



export default Home;
