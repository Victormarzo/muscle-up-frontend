import {
    FaDumbbell,
    FaOutdent,
    FaCheckCircle,
    FaMinusCircle,
    FaPlusCircle,
    FaArrowCircleLeft,
    FaCog,
    FaTimesCircle
}from 'react-icons/fa';

export function AddButton({ ...props }) {
    return (
        <FaPlusCircle { ...props } color = '#DDF8EF' />
    );
};

export function RemoveButton({ ...props }) {
    return(
        <FaTimesCircle { ...props } color = '#DDF8EF' />
    );
};

export function BackButton({ ...props }) {
    return(
        <FaArrowCircleLeft {...props }  color = '#DDF8EF' />
    );
};

export function ConfigButton({ ...props }) {
    return(
        <FaCog { ...props } color = '#DDF8EF' />
    );
};

export function WorkoutButton({ ...props }) {
    return(
        <FaDumbbell { ...props } color = '#DDF8EF' />
    );
}

export function ConfirmButton({ ...props }) {
    return(
        <FaCheckCircle { ...props } color = '#DDF8EF' />
    );
}

const buttonSet= {
    ConfirmButton,
    WorkoutButton,
    ConfigButton,
    BackButton,
    AddButton,
    RemoveButton
};
export default buttonSet;
