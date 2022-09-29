import AppRoutes from './routes'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
        <ToastContainer />
      </Router>
    </Provider>
  )
}