import { connect } from "react-redux";

import { connectUser } from "../../actions/user";

import Connexion from "src/components/Connexion";

const mapStateToProps = (state, ownProps) => ({
  isConnexionOpen: state.isConnexionOpen,
  currentUser: state.user.currentUser,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleConnexion: (userDatas) => {
    dispatch(connectUser(userDatas));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
