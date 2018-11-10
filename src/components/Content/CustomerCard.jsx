import React from 'react';
// import { Link } from 'react-router-dom';
// import Icon from 'antd/lib/icon';

const CustomerCard = props => {
//   const {
//     prequalRequest,
//     prequalPending,
//     prequalApproved,
//     viewOnly,
//     mode,
//     viewNowLink,
//     onRequestPrequal,
//     id,
//   } = props;

  return (
    <div className="customer-card">
        <span> Location: Chenes chebureche che che </span>
        <span> Package: A (2 light, 2 CO) </span>
        <span> Package Price: $10000 </span>
        <span> Status: Pending </span>
    </div>
  );
};

export default CustomerCard;
