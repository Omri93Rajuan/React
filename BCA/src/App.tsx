import "./App.css";
import ErrorDisplay from "./components/ErrorDisplay";
import Layout from "./layout/Layout";
import { AuthProvider } from "./providers/AuthProvider";
import { ErrorProvider } from "./providers/ErrorProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <ErrorProvider>
        <AuthProvider>
          <ErrorDisplay />
          <Layout children={<AppRouter />} />
        </AuthProvider>
      </ErrorProvider>
    </>
  );
}

export default App;
