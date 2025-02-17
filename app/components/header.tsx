export default function Component() {
    return (
        <div className="flex flex-row justify-between p-5 border-b-2 font-inter text-2xl h-[10vh] border-white">
            <h1 className="text-gray font-semibold">MARIKENYO</h1>
            <div className="flex flex-row">
                <h2 className="text-white px-2 font-inter text-xl cursor-pointer">Why Choose Us?</h2>
                <h2 className="text-white px-2 font-inter text-xl cursor-pointer">Our Services</h2>
                <h2 className="text-white px-2 font-inter text-xl cursor-pointer">Portfolio</h2>
                <h2 className="text-white px-2 font-inter text-xl cursor-pointer">Contact Us</h2>
            </div>
        </div>
    )
}