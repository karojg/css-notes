import React, { useState } from 'react';
import { Select, Divider, Collapse } from 'antd';

import './styles.css';

const Position = () => {
  const { Option } = Select;
  const { Panel } = Collapse;

  const [position, setPosition] = useState({
    parent: '',
    child1: '',
    child2: '',
  });

  const handleChange = (event, value) => {
    setPosition({
      ...position,
      [event]: value,
    });
  };

  const positions = ['static', 'fixed', 'relative', 'absolute', 'sticky'];
  const option = positions.map((value) => {
    {
      return (
        <Option value={value} key={value}>
          {value}
        </Option>
      );
    }
  });

  const labels = ['parent', 'child1', 'child2'];

  const select = labels.map((value) => {
    {
      return (
        <div className="select">
          <p>{value}</p>
          <Select
            defaultValue="static"
            style={{ width: 120 }}
            onChange={(e) => handleChange(value, e)}
          >
            {option}
          </Select>
        </div>
      );
    }
  });

  function callback(key) {
    console.log(key);
  }

  return (
    <div>
      <div className="select__container">{select}</div>
      <Divider dashed />
      <div className="card__container">
        <div className="card__parent" style={{ position: position.parent }}>
          <p className="card__title">Parent</p>
          <div className="card__child--1" style={{ position: position.child1 }}>
            <p className="card__title">Child 1</p>
          </div>
          <div className="card__child--2" style={{ position: position.child2 }}>
            <p className="card__title">Child 2</p>
          </div>
        </div>
      </div>
      <Divider dashed />
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="Types of Positioning" key="1">
          <ul>
            <li>
              <strong>Static: </strong>Default value. The top,right, bottom, left, and z-index
              properties have no effect.
            </li>
            <li>
              <strong>Relative: </strong>The top and bottom properties specify the vertical offset
              from its normal position; the left and right properties specify the horizontal offset.
            </li>
            <li>
              <strong>Absolute: </strong>The top, right, bottom, and left properties specify offsets
              from the edges of the element's containing block. The containing block is the ancestor
              relative to which the element is positioned.
            </li>
            <li>
              <strong>Stick: </strong>It's treated as relatively positioned until its containing
              block crosses a specified threshold, at which point it is treated as "stuck" until
              meeting the opposite edge of its containing block.
            </li>
            <li>
              <strong>Fixed: </strong>The element is removed from the normal document flow, and no
              space is created for the element in the page layout. It is positioned relative to the
              initial containing block established by the viewport, except when one of its ancestors
              has a transform, perspective, or filter property set to something other than none, in
              which case that ancestor behaves as the containing block.
            </li>
          </ul>
        </Panel>
        <Panel header="Information about the containers" key="2">
          <ul>
            <li>
              <strong>Parent: </strong>Default value. The top,right, bottom, left, and z-index
              properties have no effect.
              <ul>
                <li>margin: auto</li>
                <li>min-height: 300px</li>
                <li>min-width: 300px</li>
                <li>top: 5px //for the sticky behaviour</li>
                <li>bottom: 5px //for the sticky behaviour</li>
              </ul>
            </li>
            <li>
              <strong>Children 1: </strong>
              <ul>
                <li>width: auto</li>
                <li>top: 5px //for the sticky behaviour</li>
                <li>bottom: 5px //for the sticky behaviour</li>
              </ul>
            </li>
            <li>
              <strong>Children 2: </strong>
              <ul>
                <li>width: auto</li>
                <li>top: 5px //for the sticky behaviour</li>
                <li>bottom: 5px //for the sticky behaviour</li>
              </ul>
            </li>
          </ul>
        </Panel>
        <Panel header="I am some additional text" key="3">
          <p>
            Hello, I am here in case you need some more extra text and space to test the sticky
            functionality
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Position;
