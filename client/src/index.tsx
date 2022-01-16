import App from './components/App'; // Importante no poner la extensión .tsx sino arrojara un error
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
 document.querySelector('#root'));