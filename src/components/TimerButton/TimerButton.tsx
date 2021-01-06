import React from 'react'
import './TimerButton.css'


type Props = {
    buttonAction: () => void;
    buttonValue: String;
    isOn: boolean;
}

const TimerButton : React.FC<Props> = ({buttonAction, buttonValue, isOn}) => {
    return (
        <div className="timer-button" onClick={buttonAction}>
            {buttonValue === "start" ? 
            <p>
                {isOn ? 
                <i className="fa fa-pause btn-b"></i> :
                <i className="fa fa-play btn-b"></i>
                }
            </p> :
            <p><i className="fa fa-step-backward btn-b"></i></p>
            }
        </div>
    )
}

export default TimerButton