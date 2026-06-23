import { Link } from "react-router";

const Friends = ({ friend }) => {

    return (
        <Link to={`/friendsCard/${friend.id}`}>
            <div className="">
                <div className="card w-4xs mx-auto  bg-base-100  shadow-sm">
                    <figure className="px-10 pt-10">
                        <img src={friend.picture} alt="" />

                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{friend.name}</h2>
                        <p className="text-[#244D3F] text-xs">{friend.days_since_contact}d ago</p>
                        <div>
                            {
                                friend.tags.map((tag, index) =>
                                    <div
                                        key={index}
                                        tag={tag}
                                        className="badge badge-accent mr-1 bg-[#CBFADC] text-[#244D3F] border-0">{tag}</div>
                                )
                            }
                        </div>
                        <div className={
                            `badge badge-accent text-white border-0
                        ${friend.status == "almost due" ?
                                "bg-[#EFAD44]"
                                : (friend.status == "on-track" ?
                                    "bg-[#244D3F]" : "bg-[#EF4444]")}`}>{friend.status}</div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Friends;