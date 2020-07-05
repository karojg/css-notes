import React, { useState } from 'react';
import './styles.css';
import { Select, Divider, Row, Col } from 'antd';

const Display = () => {
  const { Option } = Select;
  const [display, setDisplay] = useState('');
  const [flex, setFlex] = useState({
    'flex-direction': '',
    'flex-wrap': '',
    'justify-content': '',
    'align-items': '',
    'align-content': '',
  });

  const handleChange = (value) => {
    setDisplay(value);
  };

  const displayItems = [
    'block',
    'inline',
    'flow-root',
    'flex',
    'none',
    'inline-block',
    'inline-table',
    'inline-flex',
    'inline-grid',
  ];

  const option = displayItems.map((value) => {
    {
      return (
        <Option value={value} key={value}>
          {value}
        </Option>
      );
    }
  });

  // Flex Items
  const handleChangeFlex = (event, value) => {
    setFlex({
      ...flex,
      [event]: value,
    });
    console.log(flex);
  };

  const flexDirectionOptions = ['none', 'row', 'row-reverse', 'column', 'column-reverse'];
  const flexDirection = (
    <div className="select">
      <p>flex-direction</p>
      <Select style={{ width: 120 }} onChange={(e) => handleChangeFlex('flex-direction', e)}>
        {flexDirectionOptions.map((value) => {
          {
            return (
              <Option value={value} key={value}>
                {value}
              </Option>
            );
          }
        })}
      </Select>
    </div>
  );

  const justifyContentOptions = ['none', 'flex-start', 'flex-end', 'center', 'space-between'];
  const justifyContent = (
    <div className="select">
      <p>justify-content</p>
      <Select style={{ width: 120 }} onChange={(e) => handleChangeFlex('justify-content', e)}>
        {justifyContentOptions.map((value) => {
          {
            return (
              <Option value={value} key={value}>
                {value}
              </Option>
            );
          }
        })}
      </Select>
    </div>
  );

  const flexWrapOptions = ['none', 'nowrap', 'wrap', 'wrap-reverse'];
  const flexWrap = (
    <div className="select">
      <p>flex-wrap</p>
      <Select style={{ width: 120 }} onChange={(e) => handleChangeFlex('flex-wrap', e)}>
        {flexWrapOptions.map((value) => {
          {
            return (
              <Option value={value} key={value}>
                {value}
              </Option>
            );
          }
        })}
      </Select>
    </div>
  );

  const alignItemsOptions = ['none', 'flex-start', 'flex-end', 'center', 'space-between'];
  const alignItems = (
    <div className="select">
      <p>align-items</p>
      <Select style={{ width: 120 }} onChange={(e) => handleChangeFlex('align-items', e)}>
        {alignItemsOptions.map((value) => {
          {
            return (
              <Option value={value} key={value}>
                {value}
              </Option>
            );
          }
        })}
      </Select>
    </div>
  );

  const alignContentOptions = [
    'none',
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'start',
    'end',
    'baseline',
  ];
  const alignContent = (
    <div className="select">
      <p>align-content</p>
      <Select style={{ width: 120 }} onChange={(e) => handleChangeFlex('align-content', e)}>
        {alignContentOptions.map((value) => {
          {
            return (
              <Option value={value} key={value}>
                {value}
              </Option>
            );
          }
        })}
      </Select>
    </div>
  );

  return (
    <>
      <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
        Select a Display Option
      </Divider>
      <div className="select__container">
        <div className="select">
          <p>display</p>
          <Select style={{ width: 120 }} onChange={handleChange}>
            {option}
          </Select>
        </div>
      </div>
      {display == 'flex' ? (
        <>
          <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
            Select a FlexBox Options
          </Divider>
          <div className="select__container--flex">
            {flexDirection}
            {justifyContent}
            {flexWrap}
            {alignItems}
            {alignContent}
          </div>
        </>
      ) : (
        ''
      )}

      <Divider />
      <div
        className="display__container"
        style={{
          display: display,
          flexDirection: flex['flex-direction'],
          justifyContent: flex['justify-content'],
          flexWrap: flex['flex-wrap'],
          alignItems: flex['align-items'],
          alignContent: flex['align-content'],
        }}
      >
        <div className="display__cell-1">Cell 1</div>
        <div className="display__cell-2">Cell 2</div>
        <div className="display__cell-3">Cell 3</div>
        <div className="display__cell-4">Cell 4</div>
        <div className="display__cell-5">Cell 5</div>
      </div>
    </>
  );
};

export default Display;
