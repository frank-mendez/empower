import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTextAlign,
  EuiNotificationBadge,
  EuiLoadingSpinner
} from '@elastic/eui';

import { getCurrentRecruit } from '../../actions/source';

const RecruitList = ({ getCurrentRecruit, recruits, loading }) => {
  useEffect(() => {
    getCurrentRecruit();
  }, [getCurrentRecruit]);

  return (
    <Fragment>
      {loading ? (
        <EuiLoadingSpinner size='xl' />
      ) : (
        <Fragment>
          {recruits.length > 0 ? (
            recruits.map(recruit => (
              <div key={recruit._id} className='dashboardList'>
                <EuiSpacer />
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiText>
                      <h3 key={5}>{recruit.position}</h3>
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText size='l'>
                      <EuiTextAlign textAlign='right'>
                        <h3 key={5}>
                          Job {recruit.index}
                          <EuiNotificationBadge>3</EuiNotificationBadge>
                        </h3>
                      </EuiTextAlign>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiText>
                  <p key={4}>
                    <strong>URL Search:</strong>
                    {recruit.url_search}
                  </p>
                </EuiText>
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiText size='s'>
                      <p>{recruit.guid}</p>
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiText size='s'>
                      <EuiTextAlign textAlign='right'>
                        <p key={6}>{recruit.date}</p>
                      </EuiTextAlign>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </div>
            ))
          ) : (
            <EuiFlexItem>
              <EuiText size='s'>
                <EuiTextAlign textAlign='right'>
                  <p key={6}>No Recruiting found</p>
                </EuiTextAlign>
              </EuiText>
            </EuiFlexItem>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

RecruitList.propTypes = {
  getCurrentRecruit: PropTypes.func.isRequired,
  recruits: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  recruits: state.source.recruits,
  loading: state.loading
});

export default connect(mapStateToProps, { getCurrentRecruit })(RecruitList);
