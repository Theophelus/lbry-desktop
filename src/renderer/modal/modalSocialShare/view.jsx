// @flow
import React from 'react';
import { Modal } from 'modal/modal';
import SocialShare from 'component/socialShare';

type Props = {
  closeModal: () => void,
  uri: string,
  speechShareable: boolean,
};

class ModalSocialShare extends React.PureComponent<Props> {
  render() {
    const { closeModal, uri, speechShareable } = this.props;
    return (
      <Modal isOpen onAborted={closeModal} type="custom" title={__('Share')}>
        <SocialShare uri={uri} onDone={closeModal} speechShareable={speechShareable} />
      </Modal>
    );
  }
}

export default ModalSocialShare;
