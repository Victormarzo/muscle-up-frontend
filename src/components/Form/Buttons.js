import {
    FaDumbbell,
    FaCheckCircle,
    FaPlusCircle,
    FaArrowCircleLeft,
    FaCog,
    FaTimesCircle
}from 'react-icons/fa';

export function AddButton({ ...props }) {
    return (
        <FaPlusCircle { ...props } color = '#90FBFF' />
    );
};

export function RemoveButton({ ...props }) {
    return(
        <FaTimesCircle { ...props } color = '#90FBFF' />
    );
};

export function BackButton({ ...props }) {
    return(
        <FaArrowCircleLeft {...props }  color = '#90FBFF' />
    );
};

export function ConfigButton({ ...props }) {
    return(
        <FaCog { ...props } color = '#90FBFF' />
    );
};

export function WorkoutButton({ ...props }) {
    return(
        <FaDumbbell { ...props } color = '#90FBFF' />
    );
}

export function ConfirmButton({ ...props }) {
    return(
        <FaCheckCircle { ...props } color = '#90FBFF' />
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
