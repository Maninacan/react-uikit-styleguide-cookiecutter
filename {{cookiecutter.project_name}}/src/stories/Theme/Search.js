import React from "react";

const Search = () => (
  <div>
    <form className="uk-search uk-search-default">
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
      />
    </form>
    <div>
      <div className="uk-margin">
        <form className="uk-search uk-search-default">
          <span className="icon-search" data-uk-search-icon />
          <input
            className="uk-search-input"
            type="search"
            placeholder="Search..."
          />
        </form>
      </div>

      <div className="uk-margin">
        <form className="uk-search uk-search-default">
          <span
            className="uk-search-icon-flip icon-search"
            data-uk-search-icon
          />
          <input
            className="uk-search-input"
            type="search"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
    <div>
      <div className="uk-margin">
        <form className="uk-search uk-search-default">
          <a href="" className="icon-search" data-uk-search-icon />
          <input
            className="uk-search-input"
            type="search"
            placeholder="Search..."
          />
        </form>
      </div>

      <div className="uk-margin">
        <form className="uk-search uk-search-default">
          <a
            href=""
            className="uk-search-icon-flip icon-search"
            data-uk-search-icon
          />
          <input
            className="uk-search-input"
            type="search"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
    <form className="uk-search uk-search-default">
      <span className="icon-search" data-uk-search-icon />
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
      />
    </form>
    <form className="uk-search uk-search-large">
      <span className="icon-search" data-uk-search-icon />
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
      />
    </form>
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <div className="uk-navbar-item">
          <form className="uk-search uk-search-navbar">
            <span className="icon-search" data-uk-search-icon />
            <input
              className="uk-search-input"
              type="search"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    </nav>
    <a className="uk-search-toggle icon-search" href="" data-uk-search-icon />
    <nav className="uk-navbar-container uk-margin" data-uk-navbar>
      <div className="nav-overlay uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          Logo
        </a>

        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>

      <div className="nav-overlay uk-navbar-right">
        <a
          className="uk-navbar-toggle icon-search"
          data-uk-search-icon
          data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#"
        />
      </div>

      <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
        <div className="uk-navbar-item uk-width-expand">
          <form className="uk-search uk-search-navbar uk-width-1-1">
            <input
              className="uk-search-input"
              type="search"
              placeholder="Search..."
              autoFocus
            />
          </form>
        </div>

        <a
          className="uk-navbar-toggle"
          data-uk-close
          data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#"
        />
      </div>
    </nav>
    <nav className="uk-navbar-container uk-margin" data-uk-navbar>
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          Logo
        </a>

        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <div>
          <a
            className="uk-navbar-toggle icon-search"
            data-uk-search-icon
            href="#"
          />
          <div
            className="uk-drop"
            data-uk-drop="mode: click; pos: left-center; offset: 0"
          >
            <form className="uk-search uk-search-navbar uk-width-1-1">
              <input
                className="uk-search-input"
                type="search"
                placeholder="Search..."
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
    <nav className="uk-navbar-container uk-margin" data-uk-navbar>
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          Logo
        </a>

        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <div>
          <a
            className="uk-navbar-toggle icon-search"
            href="#"
            data-uk-search-icon
          />
          <div
            className="uk-navbar-dropdown"
            data-uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !nav"
          >
            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
              <div className="uk-width-expand">
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search..."
                    autoFocus
                  />
                </form>
              </div>
              <div className="uk-width-auto">
                <a
                  className="uk-navbar-dropdown-close"
                  href="#"
                  data-uk-close
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav className="uk-navbar uk-navbar-container uk-margin">
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          Logo
        </a>

        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
        <a
          className="uk-navbar-toggle icon-search"
          href="#modal-full"
          data-uk-search-icon
          data-uk-toggle
        />
      </div>
    </nav>

    <div id="modal-full" className="uk-modal-full uk-modal" data-uk-modal>
      <div
        className="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle"
        data-uk-height-viewport
      >
        <button className="uk-modal-close-full" type="button" data-uk-close />
        <form className="uk-search uk-search-large">
          <input
            className="uk-search-input uk-text-center"
            type="search"
            placeholder="Search..."
            autoFocus
          />
        </form>
      </div>
    </div>
  </div>
);

export default Search;
