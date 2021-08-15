import { connect } from 'react-redux';

import Contact from 'src/components/Contact';

const mapStateToProps = (state, ownProps) => ({
    name: state.user.contact.name,
    email: state.user.contact.email,
    message: state.user.contact.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);