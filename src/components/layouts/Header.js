import React from 'react';
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiImage,
  EuiHeaderLinks,
  EuiHeaderLink
} from '@elastic/eui';

import HeaderLinks from './HeaderLinks';

const Header = () => {
  return (
    <EuiHeader>
      <EuiHeaderSection side='left'>
        <EuiHeaderSectionItem>
          <EuiImage
            class='header-image'
            alt='Random nature image'
            url='https://res.cloudinary.com/https-frank-mendez-github-io/image/upload/v1583799414/empowerassociates.png'
          />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      <EuiHeaderLinks>
        <EuiHeaderLink iconType='dashboardApp' href='#'>
          Dashboard
        </EuiHeaderLink>

        <EuiHeaderLink iconType='email' href='#'>
          Message Center
        </EuiHeaderLink>

        <EuiHeaderLink iconType='calendar' href='#'>
          Campaigns
        </EuiHeaderLink>
        <EuiHeaderLink iconType='users' href='#'>
          People
        </EuiHeaderLink>
        <EuiHeaderLink iconType='visBarVertical' href='#'>
          Companies
        </EuiHeaderLink>
        <EuiHeaderLink href='#'>Jobs</EuiHeaderLink>
        <EuiHeaderLink href='#'>Sourcing</EuiHeaderLink>
        <EuiHeaderLink iconType='grid' href='#'></EuiHeaderLink>
      </EuiHeaderLinks>
      <HeaderLinks />
    </EuiHeader>
  );
};

export default Header;
