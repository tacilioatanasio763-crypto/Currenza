export default function Home() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center",
      backgroundColor: "#0f172a",
      color: "white",
      fontFamily: "Arial"
    }}>
      <h1>Currenza 💱</h1>
      <p>Conversor global de moedas em tempo real</p>
    </main>
  );
}
