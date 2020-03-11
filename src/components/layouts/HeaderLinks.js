import React from 'react';
import { EuiIcon, EuiAvatar } from '@elastic/eui';

const HeaderLinks = () => {
  return (
    <div class='euiHeaderSection euiHeaderSection--dontGrow euiHeaderSection--right'>
      <div class='euiHeaderSectionItem euiHeaderSectionItem--borderLeft'>
        <div class='euiPopover euiPopover--anchorDownRight' id='headerAppMenu'>
          <div class='euiPopover__anchor'>
            <button
              class='euiHeaderSectionItem__button'
              type='button'
              aria-controls='keyPadMenu'
              aria-expanded='false'
              aria-haspopup='true'
              aria-label='Apps menu with 1 new app'
            >
              <EuiIcon type='bell' />
              <span class='euiNotificationBadge euiHeaderSectionItemButton__notification'>
                1
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class='euiHeaderSectionItem euiHeaderSectionItem--borderLeft'>
        <div class='euiPopover euiPopover--anchorDownRight' id='headerUserMenu'>
          <div class='euiPopover__anchor'>
            <button
              class='euiHeaderSectionItem__button'
              type='button'
              aria-controls='headerUserMenu'
              aria-expanded='false'
              aria-haspopup='true'
              aria-label='Account menu'
            >
              <EuiAvatar
                size='s'
                name='Cat'
                imageUrl='https://res.cloudinary.com/https-frank-mendez-github-io/image/upload/v1582167926/resumephoto.png'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLinks;
