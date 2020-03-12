import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  EuiBasicTable,
  EuiLink,
  EuiText,
  EuiHealth,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSwitch,
  EuiSpacer,
  EuiInMemoryTable
} from '@elastic/eui';

import { getCurrentSource } from '../actions/source';

const Table = ({ getCurrentSource, sources }) => {
  useEffect(() => {
    getCurrentSource();
  }, [getCurrentSource]);

  const onSelectionChange = selectedItems => {
    setDataTable({ selectedItems });
  };

  const toggleResponsive = () => {
    setDataTable(prevState => ({ isResponsive: !prevState.isResponsive }));
  };

  const toggleHeader = () => {
    setDataTable(prevState => ({ customHeader: !prevState.customHeader }));
  };

  const deleteUser = user => {
    //store.deleteUsers(user.id);
    setDataTable({ selectedItems: [] });
  };

  const cloneUser = user => {
    //store.cloneUser(user.id);
    setDataTable({ selectedItems: [] });
  };

  const [dataTable, setDataTable] = useState({
    pageIndex: 0,
    pageSize: 5,
    sortField: 'source',
    sortDirection: 'asc',
    selectedItems: []
  });

  const { pageIndex, pageSize, sortField, sortDirection } = dataTable;

  const actions = [
    {
      name: 'Clone',
      description: 'Clone this person',
      icon: 'copy',
      type: 'icon',
      onClick: cloneUser
    },
    {
      name: 'Delete',
      description: 'Delete this person',
      icon: 'trash',
      type: 'icon',
      color: 'danger',
      onClick: deleteUser
    }
  ];

  const columns = [
    {
      field: 'source',
      name: 'Source',
      truncateText: true,
      sortable: true,
      mobileOptions: {
        show: true,
        render: item => (
          <span>
            <EuiLink href='#' target='_blank'>
              {item.source}
            </EuiLink>
          </span>
        )
      }
    },
    {
      field: 'name',
      name: 'Name',
      truncateText: true,
      sortable: true,
      mobileOptions: {
        show: true,
        render: item => (
          <span>
            <EuiLink href='#' target='_blank'>
              {item.name}
            </EuiLink>
          </span>
        )
      }
    },
    {
      field: 'company',
      name: 'Company',
      truncateText: true,
      sortable: true,
      mobileOptions: {
        show: true,
        render: item => (
          <span>
            <EuiLink href='#' target='_blank'>
              {item.company}
            </EuiLink>
          </span>
        )
      }
    },
    {
      field: 'title',
      name: 'Title',
      truncateText: true,
      sortable: true,
      mobileOptions: {
        show: true,
        render: item => (
          <span>
            <EuiText>{item.title}</EuiText>
          </span>
        )
      }
    },
    {
      field: 'location',
      name: 'Location',
      truncateText: true,
      sortable: true,
      mobileOptions: {
        show: true,
        render: item => (
          <span>
            <EuiText>{item.address}</EuiText>
          </span>
        )
      }
    },
    {
      field: 'campaign',
      name: 'Campaign',
      truncateText: true,
      mobileOptions: {
        show: true,
        render: item => (
          <span>
            <EuiLink href='#' target='_blank'>
              {item.campaign}
            </EuiLink>
          </span>
        )
      },
      sortable: true
    },
    {
      field: 'status',
      name: 'Status',
      truncateText: true,
      mobileOptions: {
        show: true,
        render: item => (
          <span>
            <EuiText>{item.status}</EuiText>
          </span>
        )
      },
      sortable: true
    },
    {
      name: 'Actions',
      actions
    }
  ];

  const selection = {
    selectable: user => user.online,
    selectableMessage: selectable =>
      !selectable ? 'User is currently offline' : undefined,
    onSelectionChange: onSelectionChange
  };

  return (
    <Fragment>
      <EuiSpacer size='l' />

      <EuiInMemoryTable
        items={sources}
        itemId={sources._id}
        columns={columns}
        selection={selection}
        isSelectable={true}
        hasActions={true}
        responsive={true}
      />
    </Fragment>
  );
};

Table.propTypes = {
  getCurrentSource: PropTypes.func.isRequired,
  sources: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  sources: state.source.sources,
  loading: state.loading
});

export default connect(mapStateToProps, { getCurrentSource })(Table);
