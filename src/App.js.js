import React, { useState } from "react";

function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Learn Html", description: "Learn basics tags" },
    { id: 2, title: "Learn Css", description: "Learn basics css" },
    { id: 3, title: "Learn JavaScript", description: "Learn basics JS" }
  ]);

  const [newGoal, setNewGoal] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newGoal.title || !newGoal.description) return;
    const newId = Date.now();
    setGoals([...goals, { ...newGoal, id: newId }]);
    setNewGoal({ title: "", description: "" });
  };

  const handleDelete = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const styles = {
    page: {
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "'Segoe UI', sans-serif",
      paddingTop: "40px",
    },
    container: {
      backgroundColor: "#4b3869",
      padding: "25px",
      borderRadius: "25px",
      width: "350px",
      marginBottom: "30px",
    },
    goalCard: {
      backgroundColor: "#f5cba7",
      padding: "15px",
      marginBottom: "15px",
      borderRadius: "15px",
      color: "#333",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    goalTitle: {
      fontWeight: "bold",
      fontSize: "16px",
    },
    deleteBtn: {
      background: "none",
      border: "none",
      color: "#a00",
      fontSize: "18px",
      cursor: "pointer",
    },
    form: {
      backgroundColor: "#4b3869",
      padding: "20px",
      borderRadius: "20px",
      width: "300px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "10px",
      border: "none",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#a58db4",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {goals.map((goal) => (
          <div key={goal.id} style={styles.goalCard}>
            <div>
              <div style={styles.goalTitle}>{goal.title}</div>
              <div>{goal.description}</div>
            </div>
            <button style={styles.deleteBtn} onClick={() => handleDelete(goal.id)}>✖</button>
          </div>
        ))}
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="title"
          placeholder="title"
          value={newGoal.title}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="text"
          name="description"
          placeholder="description"
          value={newGoal.description}
          onChange={handleChange}
        />
        <button type="submit" style={styles.button}>Add new goal</button>
      </form>
    </div>
  );
}

export default App;
