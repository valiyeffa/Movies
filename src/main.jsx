import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './sass/style.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux'
import configureStore from './tools/store/configureStore'
import { movieAction } from './tools/actions/movieAction'
import supabase from './utils/supabase'

const movieStore = configureStore();
movieStore.subscribe(() => {
  console.log(movieStore.getState);
})

const fetchApi = async () => {
  const { data, error } = await supabase.from('Movies').select();
  if (error) {
    console.log(error);
  } else {
    movieStore.dispatch(movieAction(data));
  }
}

fetchApi();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={movieStore}>
      <App />
    </Provider>
  </StrictMode>,
)
