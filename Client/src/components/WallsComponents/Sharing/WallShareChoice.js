import React, {useContext} from 'react';
import {Context} from '../../../Context.js';
import Message from '../../Message.js';
import ShareImageBtn from '../../sharingChoices/ShareImageBtn.js';
import ShareTextBtn from '../../sharingChoices/ShareTextBtn.js';
import WallSharingCancelBtn from './WallSharingCancelBtn.js';
import EmailInput from '../../user/EmailInput.js';

function WallShareChoice ({parentToChild}) {
  const {refs} = useContext(Context);
  const shareChosen = refs.sChosen;

  return (
    <div className={'routeColumnContainer'} style={{minHeight: 'unset'}}>
      {shareChosen.current === 'Email'
        && <div>
            <Message parentToChild={{
              defaultMessage: '',
              waitMessage: '',
              config: {
                colorNum: parentToChild.config.colorNum,
                imgBG: parentToChild.config.imgBG
              }
            }} />
            <h2 className={'inputLabel'}>Send to</h2>
            <EmailInput parentToChild={{
              config: {
                colorNum: parentToChild.config.colorNum,
                imgBG: parentToChild.config.imgBG
                }
              }}
            />
          </div>
      }
      <h2 className={'inputLabel'} style={{padding: 'var(--reference) 0'}}>Choose format</h2>
      <div className={'flexDiv'}>
        <ShareTextBtn parentToChild={parentToChild} />
        <ShareImageBtn parentToChild={parentToChild} />
        <WallSharingCancelBtn parentToChild={parentToChild} />
      </div>
    </div>
  );
};

export default WallShareChoice;