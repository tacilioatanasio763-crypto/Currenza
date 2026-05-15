export const metadata = {
  title: "Currenza - Conversor de Moedas",
  description: "Conversor global de moedas com taxas em tempo real"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
