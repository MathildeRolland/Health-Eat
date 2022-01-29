import { connect } from "react-redux";

import UserBar from "../components/UserBar";

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);
