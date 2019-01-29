import React from "react";

const List = () => (
  <div>
    <ul className="uk-list">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <ul className="uk-list uk-list-bullet">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <ul className="uk-list uk-list-divider">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <ul className="uk-list uk-list-striped">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <div className="uk-child-width-expand@s" data-uk-grid>
      <div>
        <h4>Default</h4>
        <ul className="uk-list uk-list-large">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>

      <div>
        <h4>Divider</h4>
        <ul className="uk-list uk-list-large uk-list-divider">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>

      <div>
        <h4>Striped</h4>
        <ul className="uk-list uk-list-large uk-list-striped">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>

      <div>
        <h4>Bullet</h4>
        <ul className="uk-list uk-list-large uk-list-bullet">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    </div>
  </div>
);

export default List;
