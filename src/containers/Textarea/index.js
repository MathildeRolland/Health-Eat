import { connect } from 'react-redux';
import { saveInput } from 'src/actions';

import Textarea from 'src/components/Textarea';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleChange: (value) => {
        dispatch(saveInput(value, ownProps.name, ownProps.storageObjectName));
    },
});

export default connect(null, mapDispatchToProps)(Textarea);