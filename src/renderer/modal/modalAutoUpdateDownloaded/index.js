import { connect } from 'react-redux';
import { doAutoUpdateDeclined } from 'redux/actions/app';
import { doHideNotification } from 'lbry-redux';
import ModalAutoUpdateDownloaded from './view';

const perform = dispatch => ({
  closeModal: () => dispatch(doHideNotification()),
  declineAutoUpdate: () => dispatch(doAutoUpdateDeclined()),
});

export default connect(
  null,
  perform
)(ModalAutoUpdateDownloaded);
