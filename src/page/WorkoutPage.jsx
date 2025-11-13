import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css';
import { exercises } from "../data/exercises";

function WorkoutPage() {

    const {state} = useLocation();
    const navigate = useNavigate();
    const { workout, level } = state || { workout: [], level: "beginner" };
  
    const levelTimes = {
        beginner: 5,
        medium: 100,
        advanced: 180
    }

    const restTimes ={
        beginner: 3,
        medium: 25,
        advanced: 15
    }

    const initialLevel = level || "beginner";

    let message = 'Нет упражнений для отображения';
    
        
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(levelTimes[initialLevel]);
    const [isRunning, setIsRunning] = useState(false);
    const [isResting, setIsResting] = useState(false);

    

     useEffect(() => {
        if (!isRunning) return;


        const interval = setInterval(() => {
            setTimeLeft(prev => {
            if (prev <= 1) {
                //если закончилось время на упражнение
                if (!isResting) {
                        //если это упражнение не последнее, то включаем отдых
                    if(currentIndex + 1 < workout.length){
                          setIsResting(true);
                          return restTimes[level]; 
                    }else{
                        //если это было последнее упражнение, то заканчиваем тренировку
                         clearInterval(interval);
                        navigate("/"); 
                        return 0;
                    }
                  
                }else{
                    //если закончилось время отдыха, то переходим к следующему упражнению
                    setIsResting(false);
                    setCurrentIndex(currentIndex + 1);
                    return levelTimes[level];
                }

            }
            return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
        }, [isRunning, isResting, currentIndex, workout.length, level, navigate]);

// отладочные логи и безопасный рендер
    useEffect(() => {
      console.log("imported exercises:", exercises);
      console.log("workout currentIndex:", workout[currentIndex]);
    }, [workout]);

    const exercisesList = Array.isArray(exercises) ? exercises : [];
    
    return(
    <main>
        <div className="container column-2">
            <div >
                
                    <ul className="exercises_list">
                    {workout.length > 0 ? (
                      workout.map((exercise, index) => (
                        <li className="exercise_item" key={index}>
                        <div className="info">
                            <div className="num">{index + 1}</div>
                            <div className="time">{levelTimes[level]} s</div>
                        </div>
                        <img className="exercise_img" src={exercise.staticImg} alt={exercise.name}/>
                        <p className="exercises_name">{exercise.name}</p>
                        </li>
                      ))
                    ) : (
                      <li className="exercise_item">Нет карточек упражнений </li>
                    )}
                    </ul>
            </div>

            {workout.length > 0 ? (
                 <div className="part2">
                    <button className={`btn ${isRunning? "hidden" : ''}`} onClick={() => setIsRunning(true)}>Начать тренировку</button>
                     <div className={`actions_btns ${!isRunning ? "hidden" : ""}`}>
                        <button className="btn btn_stop" onClick={() => setIsRunning(false)}>Остановить</button>
                        <button className="btn btn_cansle" onClick={() => navigate("/")}>Завершить</button>
                    </div>
                    <div className="timer">  {isResting ? "Отдых" : "Упражнение"}: {timeLeft} S</div>
                    <div className="exercis">
                        <div className="exercis_title">{workout[currentIndex]?.name}</div>
                        <div className="exercis_desk">{workout[currentIndex]?.description}</div>
                        {workout[currentIndex]?.name === undefined && <div className="exercis_desk">{message}</div>}
                        <div className="exercis_gif">
                        <img src={ 
                            isResting ? "/img/rest.png"
                            : isRunning === true? workout[currentIndex]?.img : workout[currentIndex]?.staticImg} alt="" />
                            
                            
                            
                        </div>
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