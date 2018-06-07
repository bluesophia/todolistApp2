import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Container from "./Container";
import LoginScreen from "./presenter";

function mapStateToProps(state){
    const { isLoggedIn, isSubmitting } = state;
    return {
        isLoggedIn,
        isSubmitting,
    };
}

function mapDispatchToProps(dispatch){
    return {
        loginRequest: bindActionCreators(userActions.loginRequest, dispatch),
        loginSuccess: bindActionCreators(userActions.loginSuccess, dispatch),
        loginFailure: bindActionCreators(userActions.loginFailure, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
