import React from "react";

const Pagination = () => (
  <div>
    <ul className="uk-pagination" data-uk-margin>
      <li>
        <a href="#">
          <span data-uk-pagination-previous />
        </a>
      </li>
      <li>
        <a href="#">1</a>
      </li>
      <li className="uk-disabled">
        <span>...</span>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">5</a>
      </li>
      <li>
        <a href="#">6</a>
      </li>
      <li className="uk-active">
        <span>7</span>
      </li>
      <li>
        <a href="#">8</a>
      </li>
      <li>
        <a href="#">9</a>
      </li>
      <li>
        <a href="#">10</a>
      </li>
      <li className="uk-disabled">
        <span>...</span>
      </li>
      <li>
        <a href="#">20</a>
      </li>
      <li>
        <a href="#">
          <span data-uk-pagination-next />
        </a>
      </li>
    </ul>
    <div>
      <ul className="uk-pagination uk-flex-center" data-uk-margin>
        <li>
          <a href="#">
            <span data-uk-pagination-previous />
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li className="uk-disabled">
          <span>...</span>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">6</a>
        </li>
        <li className="uk-active">
          <span>7</span>
        </li>
        <li>
          <a href="#">8</a>
        </li>
        <li>
          <a href="#">
            <span data-uk-pagination-next />
          </a>
        </li>
      </ul>

      <ul
        className="uk-pagination uk-flex-right uk-margin-medium-top"
        data-uk-margin
      >
        <li>
          <a href="#">
            <span data-uk-pagination-previous />
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li className="uk-disabled">
          <span>...</span>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">6</a>
        </li>
        <li className="uk-active">
          <span>7</span>
        </li>
        <li>
          <a href="#">8</a>
        </li>
        <li>
          <a href="#">
            <span data-uk-pagination-next />
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul className="uk-pagination">
        <li>
          <a href="#">
            <span
              className="uk-margin-small-right"
              data-uk-pagination-previous
            />{" "}
            Previous
          </a>
        </li>
        <li className="uk-margin-auto-left">
          <a href="#">
            Next{" "}
            <span className="uk-margin-small-left" data-uk-pagination-next />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Pagination;
