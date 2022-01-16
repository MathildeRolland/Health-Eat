import { connect } from 'react-redux';

import Page from 'src/components/Page';
import { fetchLowCalMeals, fetchMediumCalMeals, fetchHighCaloriesMeals } from 'src/actions/meals'

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMealsFromApi: () => {
        dispatch(fetchLowCalMeals())
        dispatch(fetchMediumCalMeals())
        dispatch(fetchHighCaloriesMeals())
    }
});

export default connect(null, mapDispatchToProps)(Page);