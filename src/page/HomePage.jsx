import React from "react";
import { useNavigate } from "react-router-dom";
import { exercises } from "../data/exercises";
import { useState } from "react";
import './style.css';
import bg from '../img/bg.webp';
function HomePage() {

  const navigate = useNavigate();

  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");

  // Функция для перемешивания массива
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goal || !level || !type) {
      alert("Пожалуйста, выберите все параметры!");
      return;
    }

    // Фильтрация упражнений по параметрам
    const filtered = exercises.filter(
      (ex) => ex.goal === goal && ex.level === level && ex.type === type
    );

    // Рандомно выбираем 5 упражнений
    const workout = filtered.length > 0
      ? shuffleArray(filtered).slice(0, 5)
      : shuffleArray(exercises).slice(0, 5);

    console.log("Фильтр:", filtered.map(e => e.name));
    console.log("Сгенерированная тренировка:", workout.map(e => e.name));

    // Переход на WorkoutPage с передачей state
    navigate("/workout", { state: { workout, level } });
  };
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

                    <label htmlFor="level" >Ваш уровень</label>
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

                    <button type="submit" name="generate" className="btn btn-center"> Сгенерировать тренировку</button>

                </form>
          </div>  
         </div>    
    </main>
)

}

export default HomePage;