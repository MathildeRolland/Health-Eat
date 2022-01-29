import { connect } from "react-redux";
import { handleSubscription } from "../../actions/user";

import Inscription from "../../pages/Inscription/Inscription";

const mapStateToProps = (state, ownProps) => ({
  newUser: state.user.newUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitNewUser: (userDatas) => {
    dispatch(handleSubscription(userDatas));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Inscription);
