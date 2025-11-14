import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HistoryPage() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  // Загружаем историю
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    setHistory(savedHistory);
  }, []);

  // Повтор тренировки
  const repeatWorkout = (item) => {
  navigate("/workout", { state: { workout: item.exercises, level: item.level } });
};


  return (
    <main>
      <div className="container history-container">
        <h1 >История тренировок</h1>
        {history.length === 0 ? (
          <p>Пока нет пройденных тренировок.</p>
        ) : (
          <ul className="history-list">
            {history.map((item, index) => (
              <li key={index} className="history-item">
                <p>
                  <strong>Дата:</strong> {new Date(item.date).toLocaleString()}
                </p>
                <p>
                  <strong>Уровень:</strong> {item.level}
                </p>
                <p>
                  <strong>Количество упражнений:</strong> {item.totalExercises}
                </p>
                <p>
                  <strong>Время тренировки:</strong> {item.totalTime} сек
                </p>
                <button className="btn" onClick={() => repeatWorkout(item)}>
                  Повторить тренировку
                </button>
              </li>
            ))}
          </ul>
        )}
      
      </div>
    </main>
  );
}

export default HistoryPage;
