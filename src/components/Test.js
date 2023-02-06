import { useState, useContext, useNavigate } from 'react';
import UserContext from '../contexts/UserContext';
import LastWorkout from './Workout/LastWorkout';
import {
    FaDumbbell,
    FaOutdent,
    FaCheckCircle,
    FaMinusCircle,
    FaPlusCircle,
    FaArrowCircleLeft
}from 'react-icons/fa';
export default function Test() {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate(); 
    const obj={
        id: 8,
        userId: 3,
        name: 'treino C',
        createdAt: '2023-02-01T21:46:11.530Z',
        isActive: true,
        lastWorkout: true,
        updatedAt: '2023-02-05T15:07:56.529Z'
    };

    return (
        <>
            <LastWorkout name={obj.name} date={obj.updatedAt}/>
            <FaOutdent size='40px' color = 'white' />
            <FaDumbbell size='40px' color = 'white' onClick={navigate('/active-workout')} />
            
        </>
    );
};
