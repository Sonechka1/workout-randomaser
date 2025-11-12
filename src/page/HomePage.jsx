import React from "react";
import { useNavigate } from "react-router-dom";
import { exercises } from "../data/exercises";
import { useState } from "react";
import './style.css';
import Header from "../components/header";
import bg from '../img/bg.webp';
function HomePage() {
  const navigate = useNavigate();
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  
  // --- handleSubmit пишем здесь ---
 
const handleSubmit = (e) => {
  e.preventDefault();

  console.log("goal:", goal, "level:", level, "type:", type);

  if (!goal || !level || !type) {
    alert("Пожалуйста, выберите все параметры!");
    return;
  }

  // дальше фильтруем упражнения и navigate



    // Фильтруем упражнения
    const filtered = exercises.filter(
      ex => ex.goal === goal && ex.level === level && ex.type === type
    );

    const workout = filtered.length
      ? filtered.sort(() => 0.5 - Math.random()).slice(0, 5)
      : exercises.slice(0, 5);

    // Навигация на WorkoutPage с state
    navigate("/workout", { state: { workout, level } });
  };
  console.log("WorkoutPage: level =", level);
  // --- конец handleSubmit ---
  
return(
    
        <main style={{ backgroundImage: `url(${bg})` }} className="bg">
         <div className="container">
             <div className="form_wrapper">
                <form action="" className="form" onSubmit={handleSubmit}>
                    <label htmlFor="goal">Ваша цель</label>
                    <select name="goal" id="goal" value={goal} onChange={e => setGoal(e.target.value)}>
                        <option value="" selected >Выберете цель тренировки</option>
                        <option value="loss">Похудение</option>
                        <option value="power">Сила</option>
                        <option value="endurance">Выносливость</option>
                    </select>

                    <label htmlFor="level" >Ваша уровень</label>
                    <select name="level" id="level" value={level} onChange={e => setLevel(e.target.value)}>
                        <option value="" selected >Выберете уровень тренировки</option>
                        <option value="beginner">Начинающий</option>
                        <option value="medium">Средний</option>
                        <option value="advanced">Продолжающий</option>
                    </select>

                    <label htmlFor="type" >Тип тренировки</label>
                    <select name="type" id="type" value={type} onChange={e => setType(e.target.value)}>
                        <option value="" selected >Выберете тип тренировки</option>
                        <option value="Full">Все тело</option>
                        <option value="back">Спина + руки</option>
                        <option value="buttocks">Ягодицы + ноги</option>
                        <option value="press">Пресс + кор</option>
                    </select>

                    <button type="submit" name="generate" className="btn"> Сгенерировать тренировку</button>

                </form>
          </div>  
         </div>    
    </main>
)

}

export default HomePage;