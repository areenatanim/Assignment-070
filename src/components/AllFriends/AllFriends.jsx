import { use } from "react";
import Friends from "../Friends/Friends";
import Stats from "../Stats/Stats";

const friendsData = fetch("/data.json").then(rest => rest.json());

const AllFriends = () => {

    const friends = use(friendsData);


    return (
        <div className="max-w-11/12 mx-auto">
            <Stats friends={friends}></Stats>
            <div className="divider"></div>
            <h3 className="font-bold m-7">Your Friends</h3>
            <div className="grid grid-cols-4 gap-8">

                {
                    friends.map((friend, index) =>
                        <Friends key={index} friend={friend}></Friends>)
                }
            </div>
        </div>
    );
};

export default AllFriends;