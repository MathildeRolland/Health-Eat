import { connect } from "react-redux";
import { toggleMobileMenu } from "src/actions";

import Nav from "src/components/Menu/Nav";

const mapStateToProps = (state, ownProps) => ({
  burgerIsClicked: state.general.burgerIsClicked,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: () => {
    dispatch(toggleMobileMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
