"use client";

import { useEffect, useState } from "react";

const workouts = [
  {
    day: "DAY 1",
    title: "STRENGTH",
    exercises: [
      "Push Ups × 100",
      "Pull Ups × 25",
      "Diamond Push Ups × 50",
      "Squats × 150",
    ],
  },
  {
    day: "DAY 2",
    title: "CARDIO",
    exercises: [
      "Run × 5km",
      "Sprint × 10",
      "Jump Rope × 10 min",
      "Mountain Climbers × 100",
    ],
  },
  {
    day: "DAY 3",
    title: "CORE",
    exercises: [
      "Sit Ups × 100",
      "Leg Raises × 50",
      "Plank × 3 min",
      "Russian Twists × 100",
    ],
  },
  {
    day: "DAY 4",
    title: "POWER",
    exercises: [
      "Burpees × 50",
      "Explosive Push Ups × 40",
      "Jump Squats × 60",
      "Box Jumps × 30",
    ],
  },
  {
    day: "DAY 5",
    title: "ENDURANCE",
    exercises: [
      "Push Ups × 150",
      "Squats × 200",
      "Lunges × 100",
      "Wall Sit × 3 min",
    ],
  },
  {
    day: "DAY 6",
    title: "BEAST MODE",
    exercises: [
      "Pull Ups × 50",
      "Burpees × 75",
      "Run × 10km",
      "Plank × 5 min",
    ],
  },
  {
    day: "DAY 7",
    title: "RECOVERY",
    exercises: [
      "Stretch × 20 min",
      "Meditation × 15 min",
      "Walk × 10k steps",
      "Cold Shower",
    ],
  },
];

export default function WorkoutPage() {
  const [selectedDay, setSelectedDay] = useState(0);

  const [xp, setXp] = useState(0);

  const [streak, setStreak] = useState(0);

  const [completedExercises, setCompletedExercises] = useState<{
    [key: number]: boolean[];
  }>({});

  useEffect(() => {
    const savedXp = localStorage.getItem("xp");
    const savedStreak = localStorage.getItem("streak");
    const savedCompleted = localStorage.getItem("completedExercises");

    if (savedXp) {
      setXp(Number(savedXp));
    }

    if (savedStreak) {
      setStreak(Number(savedStreak));
    }

    if (savedCompleted) {
      setCompletedExercises(JSON.parse(savedCompleted));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("xp", xp.toString());
    localStorage.setItem("streak", streak.toString());

    localStorage.setItem(
      "completedExercises",
      JSON.stringify(completedExercises)
    );
  }, [xp, streak, completedExercises]);

  const workout = workouts[selectedDay];

  const completed =
    completedExercises[selectedDay] ||
    new Array(workout.exercises.length).fill(false);

  const toggleExercise = (index: number) => {
    const updated = [...completed];

    const wasCompleted = updated[index];

    updated[index] = !updated[index];

    setCompletedExercises({
      ...completedExercises,
      [selectedDay]: updated,
    });

    if (!wasCompleted) {
      setXp((prev) => prev + 25);
    }

    const totalCompleted = updated.filter(Boolean).length;

    if (totalCompleted === workout.exercises.length) {
      setStreak((prev) => prev + 1);
    }
  };

  const completedCount = completed.filter(Boolean).length;

  const level = Math.floor(xp / 100) + 1;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-5xl font-black text-lime-400">
              MARKIZ
            </h1>

            <p className="text-gray-400 mt-2">
              LEVEL {level}
            </p>
          </div>

          <div className="text-right">
            <p className="text-3xl font-black text-lime-400">
              {xp} XP
            </p>

            <p className="text-lime-400 font-bold mt-2">
              🔥 STREAK: {streak}
            </p>
          </div>

        </div>

        <div className="flex gap-3 overflow-x-auto mb-10">

          {workouts.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-5 py-3 rounded-2xl font-bold transition ${
                selectedDay === index
                  ? "bg-lime-400 text-black"
                  : "bg-zinc-900 text-white"
              }`}
            >
              {item.day}
            </button>
          ))}

        </div>

        <div className="bg-zinc-950 border border-lime-400/30 rounded-3xl p-8">

          <h2 className="text-6xl font-black text-lime-400 text-center">
            {workout.day}
          </h2>

          <p className="text-center text-2xl text-gray-300 mt-3 mb-10">
            {workout.title} MISSION
          </p>

          <div className="space-y-5">

            {workout.exercises.map((exercise, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex justify-between items-center"
              >

                <div>
                  <h3 className="text-2xl font-bold">
                    {exercise}
                  </h3>

                  <p className="text-lime-400 mt-1">
                    +25 XP
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={completed[index]}
                  onChange={() => toggleExercise(index)}
                  className="w-8 h-8"
                />

              </div>
            ))}

          </div>

          <div className="mt-10">

            <div className="w-full bg-zinc-800 rounded-full h-6 overflow-hidden">

              <div
                className="bg-lime-400 h-full transition-all"
                style={{
                  width: `${(completedCount / workout.exercises.length) * 100}%`,
                }}
              />

            </div>

            <p className="text-center mt-4 text-xl">
              {completedCount}/{workout.exercises.length} COMPLETED
            </p>

          </div>

          {completedCount === workout.exercises.length && (
            <div className="mt-10 text-center">

              <div className="bg-lime-400 text-black font-black text-3xl py-6 rounded-3xl">
                MISSION COMPLETE 🔥
              </div>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}