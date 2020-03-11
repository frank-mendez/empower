import React from 'react';
import {
  EuiPage,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiText,
  EuiStat
} from '@elastic/eui';

import Sidebar from '../layouts/Sidebar';
import Table from '../Table';

const Dashboard = () => {
  return (
    <div>
      <EuiPage>
        <Sidebar />
        <EuiFlexGroup>
          <EuiFlexItem grow={3}>
            <EuiFlexItem grow={false}>
              <EuiButton fill onClick={() => window.alert('Button clicked')}>
                Start New Search Task
              </EuiButton>
              <EuiFlexItem>
                <EuiStat title='100' description='Total Search Tasks' />
              </EuiFlexItem>
            </EuiFlexItem>
          </EuiFlexItem>
          <EuiFlexItem grow={7}>
            <EuiText grow={false} size='s'>
              <h1 key={0}>Fixed Point Engineer</h1>
            </EuiText>

            <EuiSpacer />
            <Table />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPage>
    </div>
  );
};

export default Dashboard;
