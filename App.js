import { AuthProvider } from './src/context/AuthContext';
import AppRouter from './src/routes/AppRouter';

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}