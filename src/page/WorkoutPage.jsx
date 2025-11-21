import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './style.css';
import { exercises } from "../data/exercises";
import restImg from "../assets/img/rest.jpg";

function WorkoutPage() {

    

    const {state} = useLocation();
    const navigate = useNavigate();
    const { workout, level } = state || { workout: [], level: "beginner" };

//const { state } = useLocation();
    const initialWorkout = state?.workout || []; // если пришёл массив — используем его   
    const [currentWorkout, setCurrentWorkout] = useState(initialWorkout);
    const levelTimes = {
        beginner: 60,
        medium: 100,
        advanced: 180
    }

    const restTimes ={
        beginner: 35,
        medium: 25,
        advanced: 15
    }

    const initialLevel = level || "beginner";

    let message = 'Нет упражнений для отображения';
    
        
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(levelTimes[initialLevel]);
    const [isRunning, setIsRunning] = useState(false);
    const [isResting, setIsResting] = useState(false);
    const [spentTime, setSpentTime] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    

     useEffect(() => {
        if (!isRunning) return;


        const interval = setInterval(() => {
            setSpentTime(prev => prev + 1);
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
                        navigate("/finish", {
                            state: {
                                totalExercises: workout.length,
                                totalTime: spentTime,
                                workout,        // массив упражнений
                                level,          // уровень тренировки
                            }
                        }); 
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
      console.log("workout currentIndex:", currentWorkout[currentIndex]);
    }, [workout]);

    const exercisesList = Array.isArray(exercises) ? exercises : [];
    
    return(
    <main>
        <div className="container column-2">
            <div >
                
                    <ul className="exercises_list">
                    {currentWorkout.length > 0 ? (
                      currentWorkout.map((exercise, index) => (
                         <li
                            key={index}
                            className="exercise_item"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            >
                            <div className="info">
                                <div className="num">{index + 1}</div>
                                <div className="time">{levelTimes[level]}</div>
                            </div>

                            <img
                                className="exercise_img"
                                src={
                                hoveredIndex === index
                                    ? exercise.img // гифка
                                    : exercise.staticImg // статичная картинка
                                }
                                alt={exercise.name}
                            />
                            <p className="exercises_name">{exercise.name}</p>
                            </li>
                      ))
                    ) : (
                      <li className="exercise_item">Нет карточек упражнений </li>
                    )}
                    </ul>
            </div>

            {currentWorkout.length > 0 ? (
                 <div className="part2">
                    <button className={`btn ${isRunning? "hidden" : ''}`} onClick={() => setIsRunning(true)}>Начать тренировку</button>
                     <div className={`actions_btns ${!isRunning ? "hidden" : ""}`}>
                        <button className="btn btn_stop" onClick={() => setIsRunning(false)}>Остановить</button>
                        <button className="btn btn_cansle" onClick={() => navigate("/")}>Завершить</button>
                    </div>
                    <div className="timer">  {isResting ? "Отдых" : "Упражнение"}: {timeLeft} s</div>
                    <div className="exercis">
                        <div className="exercis_title">{ isResting ? ' ' : currentWorkout[currentIndex]?.name}</div>
                        <div className="exercis_desk">{ isResting ? '' : currentWorkout[currentIndex]?.description}</div>
                        {currentWorkout[currentIndex]?.name === undefined && <div className="exercis_desk">{message}</div>}
                        <div className="exercis_gif">
                       <img
                                src={
                                    isResting
                                    ? restImg
                                    : isRunning
                                    ? currentWorkout[currentIndex]?.img
                                    : currentWorkout[currentIndex]?.staticImg
                                }
                                alt=""
                                />

                            
                            
                            
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