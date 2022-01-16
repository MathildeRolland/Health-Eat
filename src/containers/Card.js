import { connect } from 'react-redux';
import { addToMealQuantity, RetrieveToMealQuantity } from 'src/actions/user';

import Card from 'src/components/Cards/Card';

const mapStateToProps = (state, ownProps) => {
    const currentMeal = state.user.basket.find(meal => meal.id === ownProps.meal.id);

    return {
        quantity: currentMeal !== undefined ? currentMeal.quantity : 0,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    addOneToQuantity: (payload) => {
        dispatch(addToMealQuantity(payload));
    },
    retrieveOneFromQuantity: (payload) => {
        dispatch(RetrieveToMealQuantity(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);