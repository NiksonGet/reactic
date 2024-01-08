import React from 'react';
import { Table } from 'antd';

interface DataItem {
 key: string;
 name: string;
 age: number;
 address: string;
}

const columns = [
 {
    title: 'Name',
    dataIndex: 'name',
 },
 {
    title: 'Age',
    dataIndex: 'age',
 },
 {
    title: 'Address',
    dataIndex: 'address',
 },
];

const data: DataItem[] = [
 {
    key: '1',
    name: 'John Doe',
    age: 32,
    address: 'New York No. 1 Lake Park',
 },
 {
    key: '2',
    name: 'Jane Doe',
    age: 42,
    address: 'New York No. 2 Lake Park',
 },
];

const TableComponent: React.FC = () => {
 return <Table columns={columns} dataSource={data} />;
};

export default TableComponent;