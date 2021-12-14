import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { Register } from '../03-forms/pages/Register';

import logo from '../logo.svg';
import { FormikComponent } from '../03-forms/pages/FormikComponent';
import { FormikAbstractation } from '../03-forms/pages/FormikAbstractation';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik" activeClassName="nav-active" exact>Formik</NavLink>
            </li>
            <li>
              <NavLink to="/formikYup" activeClassName="nav-active" exact>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formikComponents" activeClassName="nav-active" exact>formik components</NavLink>
            </li>
            <li>
              <NavLink to="/formikAbs" activeClassName="nav-active" exact>formik Abstractation</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/formik">
            <FormikBasicPage />
          </Route>
          <Route path="/formikYup">
            <FormikYupPage />
          </Route>
          <Route path="/formikComponents">
            <FormikComponent />
          </Route>
          <Route path="/formikAbs">
            <FormikAbstractation />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}