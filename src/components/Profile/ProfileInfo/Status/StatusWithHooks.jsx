import React, {useEffect, useState} from 'react';


const StatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

        return (
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{props.status  || "----" }</span>
                </div>
                }
                { editMode &&
                <div>
                    <input type="text" onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status}/>
                </div>
                }
            </div>
        )

}


export default StatusWithHooks;