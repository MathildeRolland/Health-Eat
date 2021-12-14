import { connect } from 'react-redux';

import Connexion from 'src/components/Connexion';

const mapStateToProps = (state, ownProps) => ({
    isConnexionOpen: state.isConnexionOpen,
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Connexion);