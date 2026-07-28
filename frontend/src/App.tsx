import { useEffect, useState } from "react";
import AppRouter from "./routes/AppRouter";
import LoadingScreen from "./components/ui/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <AppRouter />;
}

export default App;