import { connect } from "react-redux";
import { modifyEmail, modifyPassword } from "../actions/user";

import InfosBox from "../components/User/InfosBox";

const mapStateToProps = (state, ownProps) => ({
  newUser: state.user.newUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleNewEmail: (newEmail) => {
    dispatch(modifyEmail(newEmail));
  },
  handleNewPassword: (newPass) => {
    dispatch(modifyPassword(newPass));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InfosBox);
