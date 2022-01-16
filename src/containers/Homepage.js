import { connect } from 'react-redux';

import Homepage from 'src/pages/Homepage';

const mapStateToProps = (state, ownProps) => ({
    lowCaloriesMeals: state.food.lowCaloriesMeals,
    mediumCaloriesMeals: state.food.mediumCaloriesMeals,
    highCaloriesMeals: state.food.highCaloriesMeals,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);