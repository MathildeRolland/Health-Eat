import { connect } from "react-redux";
import { deconnectUser } from "../actions/user";

import Logout from "../components/Logout";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLogout: () => {
    dispatch(deconnectUser());
  },
});

export default connect(null, mapDispatchToProps)(Logout);
