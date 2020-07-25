import { connect } from 'react-redux';
import PageSideMenu from './PageSideMenu';
import { push } from 'redux-first-routing';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    routeToItem: payload => dispatch(push(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(PageSideMenu);
