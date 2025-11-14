import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function FinishPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const totalTime = state?.totalTime || 0;
  const totalExercises = state?.totalExercises || 0;
  const workout = state?.workout || [];
  const level = state?.level || "beginner";

  // Сохраняем тренировку
   useEffect(() => {
    if (!state) return;

    const { totalTime, totalExercises, level, workout } = state;

    // Загружаем текущую историю
    const history = JSON.parse(localStorage.getItem("workoutHistory")) || [];

    // Проверяем, чтобы не добавлять один и тот же объект дважды
    const lastWorkout = history[history.length - 1];
    const newWorkout = {
      date: new Date().toISOString(),
      totalTime,
      totalExercises,
      level,
      exercises: workout
    };

    // Сравниваем с последней записью (по имени первого упражнения и времени)
    if (
      !lastWorkout ||
      lastWorkout.totalTime !== newWorkout.totalTime ||
      lastWorkout.exercises[0]?.name !== newWorkout.exercises[0]?.name
    ) {
      history.push(newWorkout);
      localStorage.setItem("workoutHistory", JSON.stringify(history));
    }
  }, [state]);
  return (
    <main>
      <div className="container">
        <div className="summary_wrapper">
          <div className="summary">
            <p>Вы молодец!</p>
            <div className="summary-info">
              Время тренировки: <span>{totalTime} сек</span>
            </div>
            <div className="summary-info">
              Выполнено упражнений: <span>{totalExercises}</span>
            </div>
            <button className="btn bottom" onClick={() => navigate("/")}>
              Вернуться на главную
            </button>
            <button className="btn" onClick={() => navigate("/history")}>
              Посмотреть историю тренировок
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FinishPage;
