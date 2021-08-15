import { connect } from 'react-redux';

import Inscription from 'src/components/Inscription';

const mapStateToProps = (state, ownProps) => ({
    name: state.user.newUser.name,
    firstname: state.user.newUser.firstname,
    email: state.user.newUser.email,
    password: state.user.newUser.password,
    passwordVerif: state.user.newUser.passwordVerif,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Inscription);