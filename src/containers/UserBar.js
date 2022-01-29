import { connect } from "react-redux";

import UserBar from "../components/UserBar";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);
