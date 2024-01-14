import { connect } from 'react-redux';
import NewItemForm from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';
import { bindActionCreators } from 'redux';

const mapsDispatchToProps = (dispatch) => {
  //or just add dispatch before addNewItem if used without bindActionCreators
  return bindActionCreators(
    {
      onSubmit: (name, price) => addNewItem(name, price)
    },
    dispatch
  );
};

export const NewItemFormContainer = connect(
  null,
  mapsDispatchToProps
)(NewItemForm);
