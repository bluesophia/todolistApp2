import { connect } from "react-redux";
//리덕스 패턴(MVC패턴 대체)
//View->Action->Dispatcher->Store(Middleware, Reducer)->View
import AppContainer from "./presenter";

const mapStateTopProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
    // profile: user.profile
  };
};

export default connect(mapStateTopProps, null)(AppContainer);
//redux, react 소통하는 부분
//Store->View로 가는부분
