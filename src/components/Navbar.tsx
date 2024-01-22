import logo from "../components/images/bobs.jpg"
import dexscreener from "./images/dexscreener.jpg"
import twitter from "./images/X_logo_2023_(white).png"
import tg from "./images/tg.png"
import { GithubOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons"
import { Tooltip, ConfigProvider, Modal, Drawer } from 'antd';
import { useState } from "react"


const buttonWidth = 80;



const Navbar: React.FC = () => {

    const [openBuy, setOpenBuy] = useState(false);

    const [open, setOpen] = useState(false);
    const [openApp, setOpenApp] = useState(false);

    const showModal = () => {
        setOpen(false)
        setOpenBuy(true);
    };
    const handleOk = () => {
        setOpenBuy(false);
    };

    // const showModalApp = () => {
    //     setOpen(false)
    //     setOpenApp(true);
    // };
    // const handleOkApp = () => {
    //     setOpenApp(false);
    // };

    const handleCancelApp = () => {
        setOpenApp(false);
    };

    const handleCancel = () => {
        setOpenBuy(false);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };





    return (

        <ConfigProvider
            button={{
                style: { width: buttonWidth, margin: 4 },
            }}

            theme={{
                token: {
                    // Seed Token
                    colorPrimary: '#00b96b',
                    borderRadius: 2,
                    colorBgBase: "#171717",
                    colorText: "white",

                },
            }}


        >
            <div className="w-full relative  h-20 md:h-32 bg-[#ee8c3a] flex justify-between items-center p-4 md:px-10 lg:px-20">
                <MenuOutlined className="mr-4 text-2xl cursor-pointer lg:hidden" onClick={showDrawer} />
                <img src={logo} alt="BOBS Logo" className=" cursor-pointer shadow-2xlr w-14 h-14 md:h-24 md:w-24 rounded-full border-2 border-black -bottom-10 md:-bottom-16 left-10 md:left-24 lg:left-60 lg:-bottom-24 hover:rotate-90 ease-in-out duration-300"></img>


                <div className=" w-full  px-5 hidden lg:flex  gap-5 font-semibold text-lg justify-center">
                    <button className="hover:text-white ease-in-out duration-300" onClick={showModal}>Buy</button>

                    <a href="https://dune.com/xibumi/bobs-analytics" target="_blank" rel="noreferrer">
                        <button className="hover:text-white ease-in-out duration-300">Dune</button>
                    </a>

                    <a className="hover:text-white" href="https://app.bobsonavax.com/">
                        <button className=" text-start ease-in-out duration-300">App</button>
                    </a>

                    <a className="hover:text-white" href="https://app.bobsonavax.com/governance">
                        <button className=" text-start ease-in-out duration-300">Governance</button>
                    </a>

                    <a className="hover:text-white" href="https://docs.bobsonavax.com/" target="_blank" rel="noreferrer">
                        <button className="hover:text-white ease-in-out duration-300">Docs</button>
                    </a>

                </div>


                <div className="flex w-full items-center justify-end">
                    <div className=" flex justify-center items-center  gap-4 mr-4">


                        <a className="hidden md:block" href="https://twitter.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                            <div className="w-10 h-10 rounded-md  bg-black p-1 ">
                                <img src={twitter} alt="Twitter Logo"></img>
                            </div>
                        </a>


                        <a className="hidden md:block" href="https://t.me/avax_bobs" target="_blank" rel="noreferrer">
                            <div className="w-10 h-10 rounded-md  bg-black p-1">
                                <img src={tg} alt="Telegram Logo"></img>
                            </div>
                        </a>

                        <a className="hidden md:block" href="https://dexscreener.com/avalanche/0x8d59f25a2a31f80d12dda8d6cee125684ea1d019" target="_blank" rel="noreferrer" >
                            <div className="w-10 h-10 rounded-md   bg-black ">
                                <img src={dexscreener} className="rounded-md" alt="Dexscreener Logo"></img>
                            </div>
                        </a>

                        <a className="hidden md:block" href="https://github.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                            <div className=" w-10 h-10 bg-black rounded-md flex justify-center items-center">
                                <GithubOutlined className="text-3xl  text-white" alt="Github logo" />
                            </div>
                        </a>
                    </div>

                    <div className=" ">
                        <a className="hover:text-white" href="https://app.bobsonavax.com/">
                            <button
                                // onClick={showModalApp}
                                className="bg-black w-32 rounded-md  text-white px-3 py-2 hover:bg-slate-800 ease-in-out duration-300">Launch App</button>

                        </a>
                    </div>
                </div>





            </div>

            <Modal
                open={openBuy}
                title="REDIRECT CONFIRMATION"

                footer={() => (
                    <div className="flex justify-end">

                        <button onClick={handleCancel} className="bg-red-500 ml-2  py-2 text-white px-3 rounded-md hover:bg-red-400 ease-in-out duration-300">Cancel</button>
                        <a href="https://traderjoexyz.com/avalanche/trade?outputCurrency=0xf5f3216E9fed36F8cCf08D310FEc6FBf7f06200f" target="_blank" rel="noreferrer">
                            <button onClick={handleOk} className="bg-amber-600 ml-2  py-2 text-white px-3 hover:text-white hover:bg-amber-500 rounded-md ease-in-out duration-300 ">Confirm</button>
                        </a>
                    </div>
                )}
            >
                <div className="w-full py-20">
                    <div className="w-full  flex flex-col text-center justify-center">
                        <p className="">You are being redirected to the swap page</p>
                        <p className="">on TraderJoeXYZ</p>

                    </div>

                    <div className="w-full  flex flex-col text-center justify-center mt-10">
                        <p className="">full website link:</p>
                        <p>https://traderjoexyz.com/avalanche/trade?outputCurrency=0xf5f3216E9fed36F8cCf08D310FEc6FBf7f06200f</p>
                    </div>
                </div>
            </Modal>

            <Modal
                open={openApp}
                title="REDIRECT CONFIRMATION"

                footer={() => (
                    <div className="flex justify-end">

                        <button onClick={handleCancelApp} className="bg-red-500 ml-2  py-2 text-white px-3 rounded-md hover:bg-red-400 ease-in-out duration-300">Cancel</button>
                        <a href="http://localhost:3000" target="_blank" rel="noreferrer">
                            <button onClick={handleOk} className="bg-amber-600 ml-2  py-2 text-white px-3 hover:text-white hover:bg-amber-500 rounded-md ease-in-out duration-300 ">Confirm</button>
                        </a>
                    </div>
                )}
            >
                <div className="w-full py-20">
                    <div className="w-full  flex flex-col text-center justify-center">
                        <p className="">You will be redirected to the app.
                            The app is a community deployed and maintained instance of the open source BOBSonAvax front end.
                            Alternative links can be found in the docs.
                        </p>

                    </div>

                    <div className="w-full  flex flex-col text-center justify-center mt-10">
                        <p className="">full website link:</p>
                        <p>https://app.bobsonavax.com</p>
                    </div>
                </div>
            </Modal>


            <Drawer
                title="MENU"
                placement="left"
                closable={true}
                onClose={onClose}
                open={open}
                key="left"
                closeIcon={<CloseOutlined style={{ color: 'white' }} />}

            >


                <div className="w-full h-full flex flex-col justify-between">
                    <div className=" w-full  mt-10 text-gray-400    px-5 flex flex-col  gap-5 font-semibold text-lg justify-center">



                        <button className="hover:text-white text-start ease-in-out duration-300" onClick={showModal}>Buy</button>


                        <a className="text-start" href="https://github.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                            <button className="hover:text-white ease-in-out duration-300">Github</button>
                        </a>

                        <a className="text-start" href="https://dune.com/xibumi/bobs-analytics" target="_blank" rel="noreferrer">
                            <button className="hover:text-white ease-in-out duration-300">Dune</button>
                        </a>

                        <a className="text-white" href="https://app.bobsonavax.com/" target="_blank" rel="noreferrer">
                            <button className=" text-start ease-in-out duration-300">App</button>
                        </a>

                        <a className="text-white" href="https://app.bobsonavax.com/governance" target="_blank" rel="noreferrer">
                            <button className=" text-start ease-in-out duration-300">Governance</button>
                        </a>

                        <a className="text-white" href="https://docs.bobsonavax.com/" target="_blank" rel="noreferrer">
                            <button className="hover:text-white ease-in-out duration-300">Docs</button>
                        </a>
                    </div>


                    <div className="flex w-full items-center justify-center">
                        <div className=" flex justify-center items-center  gap-4 mr-4">


                            <a className="" href="https://twitter.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                                <div className="w-10 h-10 rounded-md  bg-black p-1 ">
                                    <img src={twitter} alt="Twitter Logo"></img>
                                </div>
                            </a>


                            <a className="" href="https://t.me/avax_bobs" target="_blank" rel="noreferrer">
                                <div className="w-10 h-10 rounded-md  bg-black p-1">
                                    <img src={tg} alt="Telegram Logo"></img>
                                </div>
                            </a>

                            <a className="" href="https://dexscreener.com/avalanche/0x8d59f25a2a31f80d12dda8d6cee125684ea1d019" target="_blank" rel="noreferrer" >
                                <div className="w-10 h-10 rounded-md   bg-black ">
                                    <img src={dexscreener} className="rounded-md" alt="Dexscreener Logo"></img>
                                </div>
                            </a>

                            <a className="" href="https://github.com/BOBSonAVAX" target="_blank" rel="noreferrer">
                                <div className=" w-10 h-10 bg-black rounded-md flex justify-center items-center">
                                    <GithubOutlined className="text-3xl  text-white" alt="Github logo" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Drawer>


        </ConfigProvider >
    )
}


export default Navbar;
