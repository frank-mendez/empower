import React from 'react';
import { EuiBasicTable, EuiBadge } from '@elastic/eui';

const Table = () => {
  const users = [
    {
      id: '1',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      nationality: 'NL',
      online: true
    },
    {
      id: '2',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      nationality: 'NL',
      online: true
    },
    {
      id: '3',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      nationality: 'NL',
      online: true
    },
    {
      id: '4',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      nationality: 'NL',
      online: true
    },
    {
      id: '5',
      firstName: 'john',
      lastName: 'doe',
      github: 'johndoe',
      nationality: 'NL',
      online: true
    }
  ];

  const items = users.filter((user, index) => index < 10);

  const columns = [
    {
      field: 'firstName',
      name: 'Profile',
      mobileOptions: {
        render: item => <span>{item.firstName}</span>,
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true
      }
    },
    {
      field: 'lastName',
      name: 'Source',
      mobileOptions: {
        render: item => <span>{item.lastName}</span>,
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true
      }
    },
    {
      field: 'lastName',
      name: 'Campaign',
      mobileOptions: {
        render: item => <span>{item.lastName}</span>,
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true
      }
    },
    {
      field: 'lastName',
      name: 'Status',
      mobileOptions: {
        render: item => (
          <span>
            <EuiBadge color='hollow' iconType='cross' iconSide='right'>
              {item.lastName}
            </EuiBadge>
          </span>
        ),
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true
      }
    },
    {
      field: 'lastName',
      name: 'Action',
      mobileOptions: {
        render: item => <span>{item.lastName}</span>,
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true
      }
    }
  ];

  const getRowProps = item => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      className: 'customRowClass',
      onClick: () => console.log(`Clicked row ${id}`)
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: 'customCellClass',
      'data-test-subj': `cell-${id}-${field}`,
      textOnly: true
    };
  };

  return (
    <div>
      <EuiBasicTable
        items={items}
        rowHeader='firstName'
        columns={columns}
        rowProps={getRowProps}
        cellProps={getCellProps}
      />
    </div>
  );
};

export default Table;
