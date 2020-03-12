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
      render: source => (
        <span>
          <EuiLink href='#' target='_blank'>
            {source}
          </EuiLink>
        </span>
      ),
      mobileOptions: {
        show: true
      }
    },
    {
      field: 'name',
      name: 'Name',
      truncateText: true,
      sortable: true,
      render: title => (
        <span>
          <EuiLink href='#' target='_blank'>
            {title}
          </EuiLink>
        </span>
      ),
      mobileOptions: {
        show: true
      }
    },
    {
      field: 'company',
      name: 'Company',
      truncateText: true,
      sortable: true,
      render: company => (
        <span>
          <EuiLink href='#' target='_blank'>
            {company}
          </EuiLink>
        </span>
      ),
      mobileOptions: {
        show: true
      }
    },
    {
      field: 'title',
      name: 'Title',
      truncateText: true,
      sortable: true,
      render: title => (
        <span>
          <EuiText>{title}</EuiText>
        </span>
      ),
      mobileOptions: {
        show: true
      }
    },
    {
      field: 'address',
      name: 'Address',
      truncateText: true,
      sortable: true,
      render: address => (
        <span>
          <EuiText>{address}</EuiText>
        </span>
      ),
      mobileOptions: {
        show: true
      }
    },
    {
      field: 'campaign',
      name: 'Campaign',
      truncateText: true,
      render: campaign => (
        <span>
          <EuiLink href='#' target='_blank'>
            {campaign}
          </EuiLink>
        </span>
      ),
      mobileOptions: {
        show: true
      },
      sortable: true
    },
    {
      field: 'status',
      name: 'Status',
      truncateText: true,
      render: status => (
        <span>
          <EuiText>{status}</EuiText>
        </span>
      ),
      mobileOptions: {
        show: true
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
