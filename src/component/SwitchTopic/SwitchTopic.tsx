import type { FC } from "react";
import type { RootState } from "../../store/store";

import "./SwitchTopic.scss";

import { useSelector, useDispatch } from "react-redux";
import { editTopic } from "../../store/features/SwitchTopic";


const SwitchTopic: FC = () => {
    const topic = useSelector((state: RootState) => state.switchTopic.value)
    const dispatch = useDispatch()

    function eidtReduxTopick() {
        dispatch(editTopic())
    }

    return (
        <div className="SwitchTopic" onClick={ eidtReduxTopick }>
            { topic }
        </div>
    );
}


export default SwitchTopic;