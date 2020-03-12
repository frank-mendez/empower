import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  EuiBasicTable,
  EuiLink,
  EuiHealth,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSwitch,
  EuiSpacer
} from '@elastic/eui';

import { getCurrentSource } from '../actions/source';

const Table = ({ getCurrentSource, sources }) => {
  useEffect(() => {
    getCurrentSource();
  }, [getCurrentSource]);

  const [dataTable, setDataTable] = useState({
    pageIndex: 0,
    pageSize: 5,
    sortField: 'firstName',
    sortDirection: 'asc',
    selectedItems: [],
    customHeader: true,
    isResponsive: true
  });

  const {
    pageIndex,
    pageSize,
    sortField,
    sortDirection,
    customHeader,
    isResponsive
  } = dataTable;

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

  const items = [
    {
      id: '1',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      dateOfBirth: Date.now(),
      nationality: 'NL',
      online: true
    },
    {
      id: '2',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      dateOfBirth: Date.now(),
      nationality: 'NL',
      online: true
    },
    {
      id: '3',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      dateOfBirth: Date.now(),
      nationality: 'NL',
      online: true
    },
    {
      id: '4',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      dateOfBirth: Date.now(),
      nationality: 'NL',
      online: true
    }
  ];

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
      field: 'firstName',
      name: 'First Name',
      truncateText: true,
      sortable: true,
      mobileOptions: {
        render: customHeader
          ? item => (
              <span>
                {item.firstName} {item.lastName}
              </span>
            )
          : undefined,
        header: customHeader ? false : true,
        fullWidth: customHeader ? true : false,
        enlarge: customHeader ? true : false,
        truncateText: customHeader ? false : true
      }
    },
    {
      field: 'lastName',
      name: 'Last Name',
      truncateText: true,
      mobileOptions: {
        show: !isResponsive || !customHeader
      }
    },
    {
      field: 'github',
      name: 'Github',
      truncateText: true,
      mobileOptions: {
        show: !isResponsive || !customHeader
      }
    },
    {
      field: 'dateOfBirth',
      name: 'Date of Birth',
      dataType: 'date',
      truncateText: true,
      mobileOptions: {
        show: !isResponsive || !customHeader
      }
    },
    {
      field: 'nationality',
      name: 'Nationality',
      truncateText: true,
      mobileOptions: {
        show: !isResponsive || !customHeader
      }
    },
    {
      field: 'online',
      name: 'Online',
      dataType: 'boolean',
      truncateText: true,
      mobileOptions: {
        show: !isResponsive || !customHeader
      },
      sortable: true
    },
    {
      name: 'Actions',
      actions
    }
  ];

  const pagination = {
    pageIndex: pageIndex,
    pageSize: pageSize,
    totalItemCount: 5,
    pageSizeOptions: [3, 5, 8]
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection
    }
  };

  const selection = {
    selectable: user => user.online,
    selectableMessage: selectable =>
      !selectable ? 'User is currently offline' : undefined,
    onSelectionChange: onSelectionChange
  };

  return (
    <Fragment>
      <EuiFlexGroup alignItems='center' responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiSwitch
            label='Responsive'
            checked={isResponsive}
            onChange={toggleResponsive}
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiSwitch
            label='Custom header'
            disabled={!isResponsive}
            checked={isResponsive && customHeader}
            onChange={toggleHeader}
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size='l' />

      <EuiBasicTable
        items={items}
        itemId='id'
        columns={columns}
        selection={selection}
        isSelectable={true}
        hasActions={true}
        responsive={isResponsive}
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
