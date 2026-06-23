import { useLoaderData, useParams } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCameraBold } from "react-icons/pi";
import { TbBellZ } from "react-icons/tb";
import { HiOutlineArchive } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";

const FriendsCard = () => {
    const { friendsId } = useParams();


    const friends = useLoaderData();

    const rightFriend = friends.find((friend) => {
        return friend.id == Number(friendsId)

    });

    const { handelCall, handelMassage, handelVideo } = useContext(FriendContext);
    return (
        <div>

            <div className="max-w-max mx-auto my-12">

                <div className="card lg:card-side shadow-sm">
                    {/* card */}
                    <div >
                        <div className="card bg-base-100  shadow-sm">
                            <figure className="px-10 pt-10">
                                <img src={rightFriend.picture} alt="" />

                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{rightFriend.name}</h2>
                                <p className="text-[#244D3F] text-xs">{rightFriend.days_since_contact}d ago</p>
                                <div>
                                    {
                                        rightFriend.tags.map((tag, index) =>
                                            <div
                                                key={index}
                                                tag={tag}
                                                className="badge badge-accent mr-1 bg-[#CBFADC] text-[#244D3F] border-0">{tag}</div>
                                        )
                                    }
                                </div>
                                <div className={
                                    `badge badge-accent text-white border-0
                        ${rightFriend.status == "almost due" ?
                                        "bg-[#EFAD44]"
                                        : (rightFriend.status == "on-track" ?
                                            "bg-[#244D3F]" : "bg-[#EF4444]")}`}>{rightFriend.status}</div>

                            </div>

                        </div>
                        <div className="flex flex-col gap-3 my-3">
                            <button className="btn bg-white text-black border-[#e5e5e5]">
                                <TbBellZ />
                                Snooze 2 weeks
                            </button>
                            <button className="btn bg-white text-black border-[#e5e5e5]">
                                <HiOutlineArchive />

                                Archive
                            </button>
                            <button className="btn bg-white text-red-700 border-[#e5e5e5]">
                                <RiDeleteBin6Line />
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="card-body">
                        <div>
                            {/* stats */}
                            <div className=" flex justify-center items-center gap-6 my-8">
                                <div className="stats shadow">
                                    <div className="stat p-10">
                                        <div className="stat-value text-center text-[#244D3F]">{rightFriend.days_since_contact}</div>
                                        <div className="stat-title">Days Since Contact</div>


                                    </div>
                                </div>

                                <div className="stats shadow">
                                    <div className="stat p-10">
                                        <div className="stat-value text-center text-[#244D3F]">{rightFriend.goal}</div>
                                        <div className="stat-title">Goal (Days)</div>


                                    </div>
                                </div>
                                <div className="stats shadow">
                                    <div className="stat p-10">
                                        <div className="stat-value text-center text-[#244D3F]">{rightFriend.next_due_date}</div>
                                        <div className="stat-title text-center">Next Due</div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* goal */}
                        <div className="card rounded-xl bg-white shadow-xl p-8">
                            <div className="flex justify-between items-center">
                                <h2 className="font-bold text-[#244D3F] text-xl">Relationship Goal</h2>
                                <a role="button" className="btn">Edit</a>
                            </div>
                            <p className="text-xs text-gray-400">Connect every <span className="font-bold text-[1rem] text-neutral">{rightFriend.days_since_contact} days</span></p>
                        </div>
                        <div className="rounded-xl border-gray-200 my-1.5 bg-white shadow-xl p-8 flex justify-around items-center">
                            <button
                                onClick={() => handelCall(rightFriend)}
                                className="btn flex flex-col p-7">
                                <FiPhoneCall />

                                Call</button>
                            <button
                                onClick={() => handelMassage(rightFriend)}
                                className="btn flex flex-col p-7">
                                <MdOutlineTextsms />
                                massage</button>
                            <button
                                onClick={() => handelVideo(rightFriend)}
                                className="btn p-7  flex flex-col">
                                <PiVideoCameraBold />

                                <p className="font-bold">Video</p>
                            </button>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default FriendsCard;