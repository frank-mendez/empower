import React from 'react';
import {
  EuiPageSideBar,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem
} from '@elastic/eui';

const Sidebar = () => {
  return (
    <EuiPageSideBar>
      <EuiFlexGroup gutterSize='l'>
        <EuiFlexItem>
          <EuiCard
            display='plain'
            textAlign='center'
            layout='vertical'
            title={'Qualcom'}
            onClick={() => window.alert('Card clicked')}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            display='plain'
            textAlign='center'
            layout='vertical'
            title={'Gunther Ackner'}
            onClick={() => window.alert('Card clicked')}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            display='plain'
            textAlign='center'
            layout='vertical'
            title={'Sourcing'}
            onClick={() => window.alert('Card clicked')}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageSideBar>
  );
};

export default Sidebar;
