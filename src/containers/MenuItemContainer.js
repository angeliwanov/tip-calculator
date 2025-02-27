// import { bindActionCreators } from 'redux';
import MenuItem from '../components/MenuItem';
import { connect } from 'react-redux';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    total: selectItemTotal(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity))
  };
};

export const MenuItemContaier = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
