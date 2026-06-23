import { createContext, useState } from "react";

export const FriendContext = createContext();



const FriendProps = ({ children }) => {
    const [callList, setCallList] = useState();

    const handelCall = (currentCall) => {

        const isExist = callList.find((calls) => calls.id === currentCall.id);
        if (isExist) {
            alert("the friend in call list");
            return;
        }
        else {
            setCallList([...callList, currentCall]);
            alert(`${currentCall.name} is added in the call List`)
        }
    }
    const data = {
        callList,
        setCallList,
        handelCall,

    }
    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default FriendProps;