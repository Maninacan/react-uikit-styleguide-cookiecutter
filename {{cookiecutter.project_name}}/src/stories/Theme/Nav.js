import React from "react";

const Nav = () => (
  <div>
    <div className="uk-width-1-2@s uk-width-2-5@m">
      <ul className="uk-nav uk-nav-default">
        <li className="uk-active">
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
      </ul>
    </div>
    <div className="uk-width-1-2@s uk-width-2-5@m">
      <ul className="uk-nav uk-nav-default">
        <li className="uk-active">
          <a href="#">Active</a>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
              <ul>
                <li>
                  <a href="#">Sub item</a>
                </li>
                <li>
                  <a href="#">Sub item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="uk-width-1-2@s uk-width-2-5@m">
      <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
        <li className="uk-active">
          <a href="#">Active</a>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
              <ul>
                <li>
                  <a href="#">Sub item</a>
                </li>
                <li>
                  <a href="#">Sub item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="uk-width-1-2@s uk-width-2-5@m">
      <ul
        className="uk-nav-default uk-nav-parent-icon"
        data-uk-nav="multiple: true"
      >
        <li className="uk-active">
          <a href="#">Active</a>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
              <ul>
                <li>
                  <a href="#">Sub item</a>
                </li>
                <li>
                  <a href="#">Sub item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="uk-width-1-2@s uk-width-2-5@m">
      <ul className="uk-nav uk-nav-default">
        <li className="uk-nav-header">Header</li>
        <li>
          <a href="#">Item</a>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
        <li className="uk-nav-divider" />
        <li>
          <a href="#">Item</a>
        </li>
      </ul>
    </div>
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@s">
      <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
        <li className="uk-active">
          <a href="#">Active</a>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
            </li>
          </ul>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
            </li>
          </ul>
        </li>
        <li className="uk-nav-header">Header</li>
        <li>
          <a href="#">
            <span className="uk-margin-small-right icon-table" data-uk-icon />{" "}
            Item
          </a>
        </li>
        <li>
          <a href="#">
            <span
              className="uk-margin-small-right icon-th-large"
              data-uk-icon
            />{" "}
            Item
          </a>
        </li>
        <li className="uk-nav-divider" />
        <li>
          <a href="#">
            <span className="uk-margin-small-right icon-trash" data-uk-icon />{" "}
            Item
          </a>
        </li>
      </ul>
    </div>
    <div className="uk-width-1-2@s">
      <ul className="uk-nav-primary uk-nav-parent-icon" data-uk-nav>
        <li className="uk-active">
          <a href="#">Active</a>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
            </li>
          </ul>
        </li>
        <li className="uk-parent">
          <a href="#">Parent</a>
          <ul className="uk-nav-sub">
            <li>
              <a href="#">Sub item</a>
            </li>
            <li>
              <a href="#">Sub item</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
      </ul>
    </div>
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@s">
      <ul
        className="uk-nav-default uk-nav-center uk-nav-parent-icon"
        data-uk-nav
      >
        <li className="uk-active">
          <a href="#">Active</a>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
        <li>
          <a href="#">Item</a>
        </li>
      </ul>
    </div>
    <div>
      <button className="uk-button uk-button-default" type="button">
        Hover
      </button>
      <div data-uk-dropdown>
        <ul className="uk-nav uk-dropdown-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li className="uk-nav-header">Header</li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li className="uk-nav-divider" />
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </div>
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a href="#">Parent</a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
                <li className="uk-active">
                  <a href="#">Active</a>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
                <li className="uk-nav-header">Header</li>
                <li>
                  <a href="#">Item</a>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
                <li className="uk-nav-divider" />
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <a
      href="#offcanvas-slide"
      className="uk-button uk-button-default"
      data-uk-toggle
    >
      Open
    </a>

    <div id="offcanvas-slide" data-uk-offcanvas>
      <div className="uk-offcanvas-bar">
        <ul className="uk-nav uk-nav-default">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li className="uk-nav-header">Header</li>
          <li>
            <a href="#">Item</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
          <li className="uk-nav-divider" />
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Nav;
