import React, {lazy, Suspense} from "react";
import {HashRouter, Route, Routes, useParams} from "react-router-dom";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/pages/customs/Preloader/Preloader";
import store from "./redux/redux-store";
import Navbar from "./components/Navbar/Navbar";

const DialogsContainer = lazy(() => import("./components/pages/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/pages/Profile/ProfileContainer"));
const FindUsersContainer = React.lazy(() => import("./components/pages/FindUsers/FindUsersContainer"));
const News = React.lazy(() => import("./components/pages/News/News"));
const Music = React.lazy(() => import("./components/pages/Music/Music"));
const Settings = React.lazy(() => import("./components/pages/Settings/Settings"));
const Login = React.lazy(() => import("./components/pages/Login/Login"));

export function withRouter(Children) {
  return (props) => {
    const match = {params: useParams()};
    return <Children {...props} match={match}/>
  }
}

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <>
        <HeaderContainer/>
        <main className="page">
          <Navbar/>
          <section className="wrapper">
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/profile" element={<ProfileContainer/>}>
                  <Route path=":userId" element={<ProfileContainer/>}/>
                </Route>
                <Route path='dialogs/*' element={<DialogsContainer/>}/>
                <Route path="news/*" element={<News/>}/>
                <Route path="music/*" element={<Music/>}/>
                <Route path="find-users" element={<FindUsersContainer/>}/>
                <Route path="setting/*" element={<Settings/>}/>
                <Route path="login" element={<Login/>}/>
              </Routes>
            </Suspense>
          </section>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  connect(mapStateToProps, {
    initializeApp
  }),
  withRouter
)(App)

const MainApp = (props) => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </HashRouter>
    </React.StrictMode>
  )
}

export default MainApp;