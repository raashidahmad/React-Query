import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Posts from './components/Posts';

const queryClient = new QueryClient();

const App: React.FC = () => {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Posts />
      </QueryClientProvider>
    </>
  )
}

export default App
