import "./App.css";
import ErrorDisplay from "./components/ErrorDisplay";
import Layout from "./layout/Layout";
import { AuthProvider } from "./providers/AuthProvider";
import { ErrorProvider } from "./providers/ErrorProvider";
import UserProvider from "./providers/UserProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <Layout children={<AppRouter />} />
        </UserProvider>
      </AuthProvider>
    </>
  );
}

export default App;
