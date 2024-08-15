import image from "../../assets/banner.jpg"
const Home = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="ml-2 md:-ml-72 lg:-ml-80 xl:-ml-96 flex justify-start items-center">
                    <div>
                        <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl font-semibold text-black">Clean beauty</h1>
                        <p className="mb-5 text-black text-4xl">For colorful people</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;