import { connect } from 'react-redux';

import Nav from 'src/components/Menu/Nav';

const mapStateToProps = (state, ownProps) => ({
    burgerIsClicked: state.burgerIsClicked,
});

export default connect(mapStateToProps)(Nav);