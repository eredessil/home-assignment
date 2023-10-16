import "the-new-css-reset/css/reset.css";
import "../i18n/i18n";
import {RouterProvider} from "react-router-dom";
import {router} from "../navigation";
import {Provider} from "react-redux";
import store from "../redux/store";

export function App() {

    return <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
}

export default App;
