import { connect } from 'react-redux';

import Basket from '../components/Basket';

const mapStateToProps = (state, ownProps) => ({
    basket: state.user.basket,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);