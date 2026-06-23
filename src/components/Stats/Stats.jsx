const Stats = ({ friends }) => {

    return (
        <div className=" flex justify-center items-center gap-17 my-8">
            <div className="stats shadow">
                <div className="stat p-10">
                    <div className="stat-value text-center text-[#244D3F]">{friends.length}</div>
                    <div className="stat-title">Total Friends</div>


                </div>
            </div>
            <div className="stats shadow">
                <div className="stat p-10">
                    <div className="stat-value text-center text-[#244D3F]">6</div>
                    <div className="stat-title">On Track</div>


                </div>
            </div>
            <div className="stats shadow">
                <div className="stat p-10">
                    <div className="stat-value text-center text-[#244D3F]">10</div>
                    <div className="stat-title">Need Attention</div>


                </div>
            </div>
            <div className="stats shadow">
                <div className="stat p-10">
                    <div className="stat-value text-center text-[#244D3F]">10</div>
                    <div className="stat-title">Interactions This Month</div>


                </div>
            </div>
        </div>
    );
};

export default Stats;