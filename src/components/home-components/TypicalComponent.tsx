import { TypeAnimation } from 'react-type-animation';
import avalanche from "../images/avalanche.png"




const TypicalComponent: React.FC = () => {




    return (
        <div className="w-full relative bg-black h-52 pt-10 px-4 text-center flex justify-center items-start font-semibold sm:items-center ">
            <TypeAnimation

                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Show me your $BOBS',
                    1000,
                    'Show me your $BOBS and forget about COQs',
                    1000,
                    'Show me your $BOBS bigger than the BONKs',
                    1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block', color: 'white' }}
                repeat={Infinity}
            />

            <div className="absolute -bottom-10 right-5 rounded-full shadow-2xl md:right-10 md:-bottom-12 lg:right-30">
                <img className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32" src={avalanche} alt="AVAX Logo" />
            </div>
        </div>
    )
}


export default TypicalComponent