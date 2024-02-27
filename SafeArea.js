import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './App';

const Main = ()=> {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
export default Main;
