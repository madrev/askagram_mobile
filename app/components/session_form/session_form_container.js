import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from "../../actions/session_actions";



const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
