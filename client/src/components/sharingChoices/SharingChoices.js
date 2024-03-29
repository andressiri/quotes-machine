import React, {useContext} from 'react';
import {Context} from '../../Context.js';
import Message from '../Message.js';
import ShareImageBtn from './ShareImageBtn.js';
import ShareTextBtn from './ShareTextBtn.js';
import EditAndShareImgBtn from './EditAndShareImgBtn.js';
import EmailInput from '../user/EmailInput.js';

function SharingChoices ({parentToChild}) {
  const {colors, refs} = useContext(Context);
  const [colorNumber, setColorNumber] = colors.colorNum;
  const [imgBGColor, setImgBGColor] = colors.imgBG;
  const shareChosen = refs.sChosen;
  const [message, setMessage] = refs.msg;

  return (
    <div className={'routeColumnContainer'} style={{minHeight: '200px'}}>
      {shareChosen.current === 'Email'
        && <div className={'routeColumnContainer'} style={{minHeight: '0px', padding: 0}}>
            <Message parentToChild={{
              defaultMessage: '',
              waitMessage: '',
              config: {
                colorNum: colorNumber,
                imgBG: imgBGColor
              }
            }} />
            <div className={'flexDiv'}>
              <h3 className={'inputLabel'}>Send to</h3>
              <EmailInput parentToChild={{config: {colorNum: colorNumber, imgBG: imgBGColor}}}/>
            </div>
          </div>
      }
      <h2>Choose Format</h2>
      <div className={'flexDiv'}>
        <ShareTextBtn parentToChild={parentToChild} />
        <ShareImageBtn parentToChild={parentToChild} />
        <EditAndShareImgBtn parentToChild={parentToChild} />
      </div>
    </div>
  );
};

export default SharingChoices;