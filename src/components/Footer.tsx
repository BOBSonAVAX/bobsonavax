import logo from "../components/images/bobs.jpg"
import dexscreener from "./images/dexscreener.jpg"
import twitter from "./images/X_logo_2023_(white).png"
import tg from "./images/tg.png"
import { GithubOutlined, BookOutlined } from "@ant-design/icons"






const Footer: React.FC = () => {


    return (
        <div className="w-full lg:text-xl text-center" >
            <div className="w-full relative">
                <img className="absolute top-4 left-4 w-10 h-10 md:top-10 md:left-10 md:h-20 md:w-20 lg:left-20 xl:left-60 hover:rotate-90 duration-300 ease-in-out" alt="BOBS logo" src={logo}></img>
            </div>


            <footer
                className="flex flex-col items-center bg-black text-center text-white">
                <div className="container px-6 pt-6">

                    <p className="mb-4 md:text-lg">Follow us on social media</p>

                    <div className="mb-8 flex justify-center gap-6">
                        <a href="https://twitter.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                            <div className="w-10 h-10  bg-black p-1 ">
                                <img src={twitter} alt="Twitter Logo"></img>
                            </div>
                        </a>


                        <a href="https://t.me/avax_bobs" target="_blank" rel="noreferrer">
                            <div className="w-10 h-10   bg-black p-1">
                                <img src={tg} alt="Telegram Logo"></img>
                            </div>
                        </a>

                        <a href="https://dexscreener.com/avalanche/0x8d59f25a2a31f80d12dda8d6cee125684ea1d019" target="_blank" rel="noreferrer">
                            <div className="w-10 h-10   bg-black ">
                                <img src={dexscreener} className="rounded-md" alt="Dexscreener Logo"></img>
                            </div>
                        </a>

                        <a href="https://github.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                            <div className="   bg-black rounded-md flex justify-center items-center">

                                <GithubOutlined className="text-3xl pt-1" />
                            </div>
                        </a>

                        <a href="https://docs.bobsonavax.com" target="_blank" rel="noreferrer">
                            <div className="  bg-black rounded-md flex justify-center items-center">

                                <BookOutlined className="text-3xl py-1" />
                            </div>
                        </a>


                    </div>


                    <div>
                        <form action="">
                            <div
                                className="gird-cols-1 grid items-center justify-center gap-4">
                                <div className="mb-4 md:mb-6 md:ml-auto">
                                    <p className="text-xs md:text-lg">
                                        For any inquiries:  admin@bobsonavax.com
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="mb-6">



                        <p className="text-xs md:text-lg">

                            Disclaimer: $BOBS is a decentralized meme coin on the Avalanche network with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is for entertainment purposes only. Nothing on this website constitutes financial advice, and participation in $BOBS is at the user's own risk. Please conduct thorough research before engaging, as crypto investments carry inherent risks. Always exercise caution and discretion in the volatile crypto space.

                        </p>
                    </div>


                    {/* <div className="grid md:grid-cols-2 lg:grid-cols-4">
                        <div className="mb-6">
                            <h5 className="mb-2.5 font-bold uppercase">Links</h5>

                            <ul className="mb-0 list-none">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>


                <div
                    className="w-full p-4 text-center bg-black text-xs md:text-lg"
                >
                    © 2023 Copyright:
                    $BOBSonAvax
                </div>
            </footer>
        </div>
    )

}


export default Footer;