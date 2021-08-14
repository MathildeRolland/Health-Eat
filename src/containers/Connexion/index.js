import { connect } from 'react-redux';

import Connexion from 'src/components/Connexion';

const mapStateToProps = (state, ownProps) => ({
    isConnexionOpen: state.isConnexionOpen,
    email: state.user.currentUser.email,
    password: state.user.currentUser.password,
});

export default connect(mapStateToProps)(Connexion);