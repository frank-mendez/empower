import React, { useState, Fragment } from 'react';
import {
  EuiPage,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiSelect,
  EuiButtonIcon,
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiFieldSearch,
  EuiPanel,
  EuiTextAlign,
  EuiNotificationBadge
} from '@elastic/eui';

import Sidebar from '../layouts/Sidebar';
import Table from '../Table';

const Dashboard = () => {
  const [formData, setFormData] = useState({ selectAction: '' });

  const { selectAction } = formData;

  const options = [
    { value: 'option_one', text: 'Bulk Action' },
    { value: 'option_two', text: 'Option two' },
    { value: 'option_three', text: 'Option three' }
  ];

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const tabs = [
    {
      id: 'recruiting',
      name: 'Recruiting',
      content: (
        <Fragment>
          <div className='dashboardList'>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText>
                  <h3 key={5}>Fixed Point Engineer</h3>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='l'>
                  <EuiTextAlign textAlign='right'>
                    <h3 key={5}>
                      Job 1148 <EuiNotificationBadge>3</EuiNotificationBadge>
                    </h3>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiText>
              <p key={4}>
                <strong>URL Search:</strong>"Fixed-Point" OR "fixed Point"
              </p>
            </EuiText>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText size='s'>
                  <p>123</p>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='s'>
                  <EuiTextAlign textAlign='right'>
                    <p key={6}>1 Month Ago</p>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          <div className='dashboardList'>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText>
                  <h3 key={5}>Fixed Point Engineer</h3>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='l'>
                  <EuiTextAlign textAlign='right'>
                    <h3 key={5}>
                      Job 1148 <EuiNotificationBadge>3</EuiNotificationBadge>
                    </h3>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiText>
              <p key={4}>
                <strong>URL Search:</strong>"Fixed-Point" OR "fixed Point"
              </p>
            </EuiText>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText size='s'>
                  <p>123</p>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='s'>
                  <EuiTextAlign textAlign='right'>
                    <p key={6}>1 Month Ago</p>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          <div className='dashboardList'>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText>
                  <h3 key={5}>Fixed Point Engineer</h3>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='l'>
                  <EuiTextAlign textAlign='right'>
                    <h3 key={5}>
                      Job 1148 <EuiNotificationBadge>3</EuiNotificationBadge>
                    </h3>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiText>
              <p key={4}>
                <strong>URL Search:</strong>"Fixed-Point" OR "fixed Point"
              </p>
            </EuiText>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText size='s'>
                  <p>123</p>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='s'>
                  <EuiTextAlign textAlign='right'>
                    <p key={6}>1 Month Ago</p>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          <div className='dashboardList'>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText>
                  <h3 key={5}>Fixed Point Engineer</h3>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='l'>
                  <EuiTextAlign textAlign='right'>
                    <h3 key={5}>
                      Job 1148 <EuiNotificationBadge>3</EuiNotificationBadge>
                    </h3>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiText>
              <p key={4}>
                <strong>URL Search:</strong>"Fixed-Point" OR "fixed Point"
              </p>
            </EuiText>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText size='s'>
                  <p>123</p>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='s'>
                  <EuiTextAlign textAlign='right'>
                    <p key={6}>1 Month Ago</p>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          <div className='dashboardList'>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText>
                  <h3 key={5}>Fixed Point Engineer</h3>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='l'>
                  <EuiTextAlign textAlign='right'>
                    <h3 key={5}>
                      Job 1148 <EuiNotificationBadge>3</EuiNotificationBadge>
                    </h3>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiText>
              <p key={4}>
                <strong>URL Search:</strong>"Fixed-Point" OR "fixed Point"
              </p>
            </EuiText>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText size='s'>
                  <p>123</p>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='s'>
                  <EuiTextAlign textAlign='right'>
                    <p key={6}>1 Month Ago</p>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          <div className='dashboardList'>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText>
                  <h3 key={5}>Fixed Point Engineer</h3>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='l'>
                  <EuiTextAlign textAlign='right'>
                    <h3 key={5}>
                      Job 1148 <EuiNotificationBadge>3</EuiNotificationBadge>
                    </h3>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiText>
              <p key={4}>
                <strong>URL Search:</strong>"Fixed-Point" OR "fixed Point"
              </p>
            </EuiText>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText size='s'>
                  <p>123</p>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='s'>
                  <EuiTextAlign textAlign='right'>
                    <p key={6}>1 Month Ago</p>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          <div className='dashboardList'>
            <EuiSpacer />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText>
                  <h3 key={5}>Fixed Point Engineer</h3>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='l'>
                  <EuiTextAlign textAlign='right'>
                    <h3 key={5}>
                      Job 1148 <EuiNotificationBadge>3</EuiNotificationBadge>
                    </h3>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiText>
              <p key={4}>
                <strong>URL Search:</strong>"Fixed-Point" OR "fixed Point"
              </p>
            </EuiText>
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiText size='s'>
                  <p>123</p>
                </EuiText>
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiText size='s'>
                  <EuiTextAlign textAlign='right'>
                    <p key={6}>1 Month Ago</p>
                  </EuiTextAlign>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
        </Fragment>
      )
    },
    {
      id: 'sales',
      name: 'Sales',
      content: (
        <Fragment>
          <EuiSpacer />
          <EuiTitle>
            <h3>Dextrose</h3>
          </EuiTitle>
          <EuiText>
            Intravenous sugar solution, also known as dextrose solution, is a
            mixture of dextrose (glucose) and water. It is used to treat low
            blood sugar or water loss without electrolyte loss.
          </EuiText>
        </Fragment>
      )
    }
  ];

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
              <EuiSpacer />
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiDescriptionList textStyle='reverse'>
                    <EuiDescriptionListTitle>
                      Total Search Tasks
                    </EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      100
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiDescriptionList textStyle='reverse'>
                    <EuiDescriptionListTitle>
                      Last Update
                    </EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      5 Min Ago{' '}
                      <EuiButtonIcon
                        color='success'
                        onClick={() => window.alert('Button clicked')}
                        iconType='refresh'
                        aria-label='Refresh'
                      />
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer />
              <EuiFlexGroup>
                <EuiFlexItem>
                  <Fragment>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <EuiFieldSearch
                          placeholder='Search...'
                          fullWidth
                          aria-label='An example of search with fullWidth'
                        />
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiButton>Search</EuiButton>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </Fragment>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer />
              <EuiTabbedContent
                tabs={tabs}
                className='dashboardTab'
                initialSelectedTab={tabs[0]}
                autoFocus='selected'
                onTabClick={tab => {
                  console.log('clicked tab', tab);
                }}
              />
            </EuiFlexItem>
          </EuiFlexItem>
          <EuiFlexItem grow={7}>
            <EuiPanel grow={false}>
              <EuiFlexGroup>
                <EuiFlexItem grow={5}>
                  <EuiDescriptionList>
                    <EuiDescriptionListTitle>
                      Fixed Point Engineer
                    </EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      <strong>URL Search:</strong>"Fixed-Point" OR "fixed Point"
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiDescriptionList textStyle='reverse'>
                    <EuiDescriptionListTitle>Job ID</EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      Job 1148
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiDescriptionList textStyle='reverse'>
                    <EuiDescriptionListTitle>
                      Total Results
                    </EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      30 Results
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiDescriptionList textStyle='reverse'>
                    <EuiDescriptionListTitle>Last Run</EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      1 Month Ago
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiDescriptionList textStyle='reverse'>
                    <EuiDescriptionListTitle>
                      Task Number
                    </EuiDescriptionListTitle>
                    <EuiDescriptionListDescription>
                      124
                    </EuiDescriptionListDescription>
                  </EuiDescriptionList>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer />
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiSelect
                    id='selectDocExample'
                    options={options}
                    value={selectAction}
                    onChange={e => onChange(e)}
                    aria-label='Use aria labels when no actual label is in use'
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiButton
                    fill
                    onClick={() => window.alert('Button clicked')}
                  >
                    Add To Campaign
                  </EuiButton>
                </EuiFlexItem>
                <EuiFlexItem>
                  <Fragment>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <EuiFieldSearch
                          placeholder='Search...'
                          fullWidth
                          aria-label='An example of search with fullWidth'
                        />
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiButton>Search</EuiButton>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </Fragment>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer />
              <Table />
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPage>
    </div>
  );
};

export default Dashboard;
