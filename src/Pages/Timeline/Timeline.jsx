import { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { PiVideoCameraBold } from "react-icons/pi";
import { FriendContext } from "../../context/FriendContext";

const ContactCards = () => {
    const { callList, massageList, videoList } = useContext(FriendContext);

    const sections = [
        {
            title: "Call List",
            icon: <FiPhoneCall />,
            list: callList,
            color: "bg-green-100 text-green-700",
            border: "border-green-400",
        },
        {
            title: "Message List",
            icon: <MdOutlineTextsms />,
            list: massageList,
            color: "bg-blue-100 text-blue-700",
            border: "border-blue-400",
        },
        {
            title: "Video List",
            icon: <PiVideoCameraBold />,
            list: videoList,
            color: "bg-purple-100 text-purple-700",
            border: "border-purple-400",
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <h1 className="text-2xl font-bold text-[#244D3F] mb-8">
                Contact Timeline
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sections.map((section) => (
                    <div key={section.title} className={`rounded-xl border-l-4 ${section.border} bg-white shadow-sm p-5`}>

                        {/* section header */}
                        <div className={`inline-flex items-center gap-2 text-sm font-semibold px-3 py-1 rounded-full mb-4 ${section.color}`}>
                            {section.icon}
                            {section.title}
                            <span className="ml-1 font-bold">({section.list?.length ?? 0})</span>
                        </div>

                        {/* cards */}
                        {section.list?.length === 0 || !section.list ? (
                            <p className="text-sm text-gray-400 text-center py-6">
                                No one added yet.
                            </p>
                        ) : (
                            <ul className="flex flex-col gap-3">
                                {section.list.map((friend) => (
                                    <li
                                        key={friend.id}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100"
                                    >
                                        <img
                                            src={friend.picture}
                                            alt={friend.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800">
                                                {friend.name}
                                            </p>
                                            <p className="text-xs text-gray-400">
                                                {friend.days_since_contact}d ago
                                            </p>
                                        </div>
                                        <div
                                            className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full text-white
                                                ${friend.status === "overdue"
                                                    ? "bg-red-500"
                                                    : friend.status === "almost due"
                                                        ? "bg-orange-400"
                                                        : "bg-[#244D3F]"
                                                }`}
                                        >
                                            {friend.status}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactCards;