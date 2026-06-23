import { createContext, useState } from "react";

export const FriendContext = createContext();



const FriendProps = ({ children }) => {
    const [callList, setCallList] = useState([]);
    const [massageList, setMassageList] = useState([]);
    const [videoList, setVideoList] = useState([]);

    const handelCall = (currentCall) => {

        const isExist =
            callList.find(
                (calls) => { return (calls.id === currentCall.id) });
        if (isExist) {
            alert("the friend in call list");
            return;
        }
        else {
            setCallList([...callList, currentCall]);
            alert(`${currentCall.name} is added in the call List`)
        }
    }
    const handelMassage = (currentMassage) => {

        const isExist =
            massageList.find(
                (massage) => { return (massage.id === currentMassage.id) });
        if (isExist) {
            alert("the friend in massage list");
            return;
        }
        else {
            setMassageList([...massageList, currentMassage]);
            alert(`${currentMassage.name} is added in the massage List`)
        }
    }
    const handelVideo = (currentVideo) => {

        const isExist =
            videoList.find(
                (video) => { return (video.id === currentVideo.id) });
        if (isExist) {
            alert("the friend in video list");
            return;
        }
        else {
            setVideoList([...videoList, currentVideo]);
            alert(`${currentVideo.name} is added in the video List`)
        }
    }
    const data = {
        callList,
        setCallList,
        handelCall,
        massageList,
        setMassageList,
        handelMassage,
        videoList,
        setVideoList,
        handelVideo,

    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProps;