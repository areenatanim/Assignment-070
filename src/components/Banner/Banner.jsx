import { GoPlus } from "react-icons/go";

const Banner = () => {
    return (
        <div className="hero  min-h-[80%] ">
            <div className="hero-content text-center">
                <div className="mt-28">
                    <h1 className="text-4xl font-bold">
                        Friends to keep close in your life
                    </h1>
                    <p className="py-6 text-[#65758B]">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture
                        <br />
                        the
                        relationships that matter most.
                    </p>
                    <button className="btn btn-primary bg-[#244D3F]">
                        <GoPlus />
                        Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;