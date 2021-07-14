import { connect } from 'react-redux';
import { toggleMobileMenu } from 'src/actions';

import Burger from 'src/components/Menu/Burger';

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleClick: () => {
        dispatch(toggleMobileMenu());
    },
});

export default connect(null, mapDispatchToProps)(Burger);