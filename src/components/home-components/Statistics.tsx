import { useEffect } from "react"
import PairDexscreener from "../interfaces/PairInterface";



interface Stats {
    data: PairDexscreener | undefined
}

const Statistics: React.FC<Stats> = (data) => {






    useEffect(() => {
    }, [data])


    return (
        <div className="w-full  bg-gradient-to-b from-[#ee8c3a] to-[#ffffff] flex justify-center">
            <div className="w-full max-w-[750px] lg:max-w-full  flex py-1 flex-col justify-center items-start lg:flex-row lg:my-32 lg:justify-center lg:items-center ">




                <div className=" max-w-[550px]  w-full md:ml-2  p-4  flex md:justify-center lg:my-0 lg:mx-0">
                    <div className="w-full rounded-lg shadow-2xl px-4 py-3 bg-gradient-to-tl from-gray-700 via-gray-900 to-black text-white">
                        <p className="text-xs">Total supply</p>
                        <p className="mt-10 w-full text-center text-3xl">808,580,858,085</p>
                        <p className="mb-10 w-full text-center text-sm text-slate-400">$BOBS</p>
                        <p className="text-xs pb-12 w-full text-end lg:pb-4">Fully emitted and in circulation</p>
                    </div>
                </div>



                <div className="w-full -mt-20   p-4 max-w-[550px] flex md:justify-center md:ml-28 lg:my-0 lg:mx-0 ">
                    <div className="w-full rounded-lg shadow-2xl px-4 py-3 bg-gradient-to-tl from-gray-700 via-gray-900 to-black text-white">
                        <p className="text-xs">24h Volume</p>
                        <p className="mt-10 w-full text-center text-3xl">$ {data.data?.volume?.h24.toLocaleString()}</p>
                        <p className="mb-10 w-full text-center text-sm text-slate-400">BOBS/WAVAX</p>
                        <p className="text-xs pb-12 w-full text-end lg:pb-4">Pair is traded on TraderJoeXYZ</p>
                    </div>
                </div>


                <div className="w-full -mt-20   p-4 max-w-[550px] flex md:justify-center md:ml-52 lg:my-0 lg:mx-0">
                    <div className="w-full rounded-lg shadow-2xl px-4 py-3 bg-gradient-to-tl from-gray-700 via-gray-900 to-black text-white">
                        <p className="text-xs">Market Capitalization</p>
                        <p className="mt-10 w-full text-center text-3xl">$ {data.data?.fdv?.toLocaleString()}</p>
                        <p className="mb-10 w-full text-center text-sm text-slate-400">USD Value</p>
                        <p className="text-xs pb-4 w-full text-end">Same FDV value</p>
                    </div>
                </div>





            </div>

            {/* <div className="w-full my-5">
                border
            </div> */}

        </div>
    )
}


export default Statistics