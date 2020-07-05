import React, { useState } from 'react';
import './styles.css';
import { Select, Divider, Collapse, Tooltip } from 'antd';

const Display = () => {
  const { Option } = Select;
  const { Panel } = Collapse;

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
    'flex',
    'none',
    'inline-block',
    'inline-table',
    'inline-flex',
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
            <Tooltip
              title="This property has no effect when there is only one line of flex items"
              color="orange"
              key="orange"
            >
              {alignContent}
            </Tooltip>
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
      <Divider />

      <Collapse defaultActiveKey={['1']}>
        <Panel header="Display Options" key="1">
          <ul>
            <li>
              <strong>Block: </strong>The element generates a block element box, generating line
              breaks both before and after the element when in the normal flow..
            </li>
            <li>
              <strong>Inline: </strong>TThe element generates one or more inline element boxes that
              do not generate line breaks before or after themselves. In normal flow, the next
              element will be on the same line if there is space
            </li>
            <li>
              <strong>Flex: </strong>The element behaves like a block element and lays out its
              content according to the flexbox model.
            </li>
            <li>
              <strong>None: </strong>Turns off the display of an element so that it has no effect on
              layout (the document is rendered as though the element did not exist). All descendant
              elements also have their display turned off.
            </li>
            <li>
              <strong>Inline Block: </strong>The element generates a block element box that will be
              flowed with surrounding content as if it were a single inline box (behaving much like
              a replaced element would).
            </li>
            <li>
              <strong>Inline Table: </strong> The inline-table value does not have a direct mapping
              in HTML. It behaves like an HTML 'table' element, but as an inline box, rather than a
              block-level box. Inside the table box is a block-level context.
            </li>
            <li>
              <strong>Inline Flex: </strong>The element generates a block element box that will be
              flowed with surrounding content as if it were a single inline box (behaving much like
              a replaced element would).
            </li>
          </ul>
          <span>
            Reference:{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
              https://developer.mozilla.org/en-US/docs/Web/CSS/display
            </a>
          </span>
        </Panel>
      </Collapse>
    </>
  );
};

export default Display;
