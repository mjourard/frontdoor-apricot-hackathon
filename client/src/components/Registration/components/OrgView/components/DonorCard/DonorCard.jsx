import React from 'react';

import { Table } from '@social-solutions/component-library';

import styles from './DonorCard.styles';

const DonorCard = () => {
    const columns = [
        {
          accessor: 'rank',
          Header: 'Rank',
          isSortable: false,
        },
        {
          accessor: 'name',
          Header: 'Name',
          isSortable: false,
        },
        {
            accessor: 'total',
            Header: 'Total Donated',
            isSortable: true,
          },
      ];
    
      const tableData = [
          {
              rank: 1,
              name: "mock 1",
              total: "$20,000"
          },
          {
            rank: 2,
            name: "mock 2",
            total: "$19,000"
          },
          {
            rank: 3,
            name: "mock 3",
            total: "$18,000"
          },
          {
            rank: 4,
            name: "mock 4",
            total: "$17,000"
          },
          {
            rank: 5,
            name: "mock 5",
            total: "$16,000"
          },
          {
            rank: 6,
            name: "mock 6",
            total: "$15,000"
          },
          {
            rank: 7,
            name: "mock 7",
            total: "$14,000"
          },
          {
            rank: 8,
            name: "mock 8",
            total: "$13,000"
          },
          {
            rank: 9,
            name: "mock 9",
            total: "$12,000"
          },
          {
            rank: 10,
            name: "mock 10",
            total: "$11,000"
          },
          {
            rank: 11,
            name: "mock 11",
            total: "$10,000"
          },
      ];

    return (
    <styles.CardContainer>
        <styles.CardTitle>
            Top Donors
        </styles.CardTitle>
        <styles.CardContent>
        <Table
            initialState={{ pageIndex: 0, pageSize: 10 }}
            columns={columns}
            data={tableData.map(({ rank, name, total }) => ({
                rank,
                name,
                total,
              }))}
      />
        </styles.CardContent>
    </styles.CardContainer>
)
};

export default DonorCard;