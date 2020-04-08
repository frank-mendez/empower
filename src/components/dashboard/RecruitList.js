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
  EuiLoadingSpinner,
  EuiLink
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
              <EuiLink href='' key={recruit._id} className='dashboardList'>
                <EuiSpacer />
                <EuiFlexGroup>
                  <EuiFlexItem grow={10}>
                    <EuiText>
                      <h6 key={5}>{recruit.position}</h6>
                    </EuiText>
                  </EuiFlexItem>
                  <EuiFlexItem grow={2}>
                    <EuiText size='l'>
                      <EuiTextAlign textAlign='right'>
                        <h6 key={5}>Job {recruit.index}</h6>
                      </EuiTextAlign>
                    </EuiText>
                  </EuiFlexItem>
                </EuiFlexGroup>
                <EuiText size='s'>
                  <h6 key={4}>URL Search:</h6>
                  <p>{recruit.url_search}</p>
                </EuiText>
                <EuiFlexGroup>
                  <EuiFlexItem>
                    <EuiText size='s'>
                      <p key={1}>214</p>
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
              </EuiLink>
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
