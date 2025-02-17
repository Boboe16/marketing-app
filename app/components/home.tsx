import ShoeModel from "./shoe-model";

export default function Component() {
    return (
        <div className="flex flex-col items-center h-[90hv]">
            <div className="fixed rounded-l-full rounded-t-full bg-gradient bottom-1 right-0 w-[700px] h-[500px] -z-10">
                <ShoeModel />
            </div>
            {/* Left Side: Text Section */}
            <div className="flex flex-col p-28 text-center">
                <h2 className="font-inter text-2xl tracking-wide font-extralight">1# MARKETING & ADVERTISING AGENCY</h2>
                <h1 className="font-playfair text-7xl leading-tight">MAXIMIZE YOUR</h1>
                <h1 className="font-playfair text-7xl leading-tight">BUSINESS POTENTIAL</h1>
                <h2 className="font-inter text-2xl py-10 tracking-wide font-medium">GET MORE CUSTOMERS, MORE CONNECTIONS, AND MORE SUCCESS.</h2>
            </div>
            <div className="flex flex-row mb-10">
                <a className="font-inter text-white text-xl mr-2 bg-[#1e1d1d] cursor-pointer shadow-md border border-white self-center text-center py-3 px-6 rounded-xl transition hover:bg-white hover:text-black hover:border-black">
                    PARTNER WITH OUR AGENCY -{'>'}
                </a>
                <h2 className="text-white text-xl py-3 ml-2">Be one of our thriving clients in the Philippines.</h2>
            </div>
        </div>
    );
}
