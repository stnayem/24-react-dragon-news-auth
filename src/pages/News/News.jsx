import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="md:col-span-3 border">
                    <h2 className="text-5xl text-bold">New details</h2>

                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;