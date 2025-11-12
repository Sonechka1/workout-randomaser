import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css';
import { exercises } from "../data/exercises";

function WorkoutPage() {

    const {state} = useLocation();
    const navigate = useNavigate();
    const { workout, level } = state || { workout: [], level: "beginner" };
  
    const levelTimes = {
        beginner: 60,
        medium: 100,
        advanced: 180
    }
    const initialLevel = level || "beginner";

    let message = 'Нет упражнений для отображения';
    
        
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(levelTimes[initialLevel]);
    const [isRunning, setIsRunning] = useState(false);

    


     useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTimeLeft(prev => {
            if (prev <= 1) {
                if (currentIndex + 1 < workout.length) {
                setCurrentIndex(currentIndex + 1);
                return levelTimes[level];
                } else {
                clearInterval(interval);
                navigate("/"); 
                return 0;
                }
            }
            return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
        }, [isRunning, currentIndex, workout.length, level, navigate]);

          // отладочные логи и безопасный рендер
    useEffect(() => {
      console.log("imported exercises:", exercises);
      console.log("workout 1:", workout[1]);
    }, [workout]);

    const exercisesList = Array.isArray(exercises) ? exercises : [];
    
    return(
    <main>
        <div className="container column-2">
            <div >
                <button className="btn"onClick={() => setIsRunning(true)}>Начать тренировку</button>
                    <ul className="exercises_list">
                    {exercisesList.length > 0 ? (
                      exercisesList.map((exercise, index) => (
                        <li className="exercise_item" key={index}>
                        <div className="info">
                            <div className="num">{index + 1}</div>
                            <div className="time">{exercise.time}</div>
                        </div>
                        <img className="exercise_img" src={exercise.img} alt={exercise.name}/>
                        <p className="exercises_name">{exercise.name}</p>
                        </li>
                      ))
                    ) : (
                      <li className="exercise_item">Нет карточек упражнений (exercises пуст или undefined)</li>
                    )}
                    </ul>
            </div>

            {workout.length > 0 ? (
                 <div className="part2">
                    <div className="timer">{timeLeft} S</div>
                    <div className="exercis">
                        <div className="exercis_title">{workout[1]?.name}</div>
                        <div className="exercis_desk">{workout[1]?.description}</div>
                        {workout[1]?.name === undefined && <div className="exercis_desk">{message}</div>}
                        <div className="exercis_gif">
                        <img src={workout[1]?.img} alt="" />
                        </div>
                    </div>
                    <div className="actions_btns">
                        <button className="btn btn_stop" onClick={() => setIsRunning(false)}>Остановить</button>
                        <button className="btn btn_cansle" onClick={() => navigate("/")}>Завершить</button>
                    </div>
                    </div>
            ):(
                 <div className="exercis">
                        
                        <div className="exercis_desk">{message}</div>
                </div>
            )
        }
            
      





        </div>
    </main>
    )
}


export default WorkoutPage;