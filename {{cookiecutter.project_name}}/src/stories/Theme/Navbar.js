import React from "react";
import lightImage from "../../images/light.jpg";

const Navbar = () => (
  <div>
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
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
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
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
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
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
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav className="uk-navbar-container uk-margin" data-uk-navbar="mode: click">
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
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
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="uk-position-relative">
      <img src={lightImage} alt="" />
      <div className="uk-position-top">
        <nav
          className="uk-navbar-container uk-navbar-transparent"
          data-uk-navbar
        >
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="#">Active</a>
              </li>
              <li>
                <a href="#">Item</a>
              </li>
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
      </div>
    </div>
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">
              <div>
                Active
                <div className="uk-navbar-subtitle">Subtitle</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div>
                Parent
                <div className="uk-navbar-subtitle">Subtitle</div>
              </div>
            </a>
            <div className="uk-navbar-dropdown">
              <ul className="uk-nav uk-navbar-dropdown-nav">
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
          </li>
          <li>
            <a href="#">
              <div>
                Item
                <div className="uk-navbar-subtitle">Subtitle</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <nav className="uk-navbar-container uk-margin" data-uk-navbar>
      <div className="uk-navbar-left">
        <a className="uk-navbar-item uk-logo" href="#">
          Logo
        </a>

        <ul className="uk-navbar-nav">
          <li>
            <a href="#">
              <span
                className="uk-icon uk-margin-small-right icon-star-empty"
                data-uk-icon
              />
              Features
            </a>
          </li>
        </ul>

        <div className="uk-navbar-item">
          <div>
            Some <a href="#">Link</a>
          </div>
        </div>

        <div className="uk-navbar-item">
          <form action="javascript:void(0)">
            <input
              className="uk-input uk-form-width-small"
              type="text"
              placeholder="Input"
            />
            <button className="uk-button uk-button-default">Button</button>
          </form>
        </div>
      </div>
    </nav>
    <nav className="uk-navbar-container uk-margin" data-uk-navbar>
      <div className="uk-navbar-center">
        <div className="uk-navbar-center-left">
          <div>
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="#">Active</a>
              </li>
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
                    <li>
                      <a href="#">Item</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <a className="uk-navbar-item uk-logo" href="#">
          Logo
        </a>
        <div className="uk-navbar-center-right">
          <div>
            <ul className="uk-navbar-nav">
              <li>
                <a href="#">Item</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <nav className="uk-navbar uk-navbar-container uk-margin">
        <div className="uk-navbar-left">
          <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon href="#" />
        </div>
      </nav>

      <nav className="uk-navbar uk-navbar-container uk-margin">
        <div className="uk-navbar-left">
          <a className="uk-navbar-toggle" href="#">
            <span data-uk-navbar-toggle-icon />{" "}
            <span className="uk-margin-small-left">Menu</span>
          </a>
        </div>
      </nav>
    </div>
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Active</a>
          </li>
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
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
      <div className="uk-navbar-right">
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
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a href="#">Two Columns</a>
            <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
              <div
                className="uk-navbar-dropdown-grid uk-child-width-1-2"
                data-uk-grid
              >
                <div>
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
                <div>
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
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav
      className="uk-navbar-container"
      data-uk-navbar="boundary-align: true; align: center;"
    >
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a href="#">Item</a>
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
          <li>
            <a href="#">Item</a>
            <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
              <div
                className="uk-navbar-dropdown-grid uk-child-width-1-2"
                data-uk-grid
              >
                <div>
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
                <div>
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
              </div>
            </div>
          </li>
          <li>
            <a href="#">Item</a>
            <div className="uk-navbar-dropdown uk-navbar-dropdown-width-3">
              <div
                className="uk-navbar-dropdown-grid uk-child-width-1-3"
                data-uk-grid
              >
                <div>
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
                <div>
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
                <div>
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
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li>
            <a href="#">Item</a>
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
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a href="#">Item</a>
            <div
              className="uk-navbar-dropdown"
              data-uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;"
            >
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
          <li>
            <a href="#">Item</a>
            <div
              className="uk-navbar-dropdown"
              data-uk-drop="boundary: !nav; boundary-align: true; pos: bottom-justify;"
            >
              <div
                className="uk-navbar-dropdown-grid uk-child-width-1-2"
                data-uk-grid
              >
                <div>
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
                <div>
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
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div className="uk-position-relative">
      <nav className="uk-navbar-container" data-uk-navbar="dropbar: true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <a href="#">Item</a>
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
            <li>
              <a href="#">Item</a>
              <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                <div
                  className="uk-navbar-dropdown-grid uk-child-width-1-2"
                  data-uk-grid
                >
                  <div>
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
                  <div>
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
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
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

      <div className="uk-navbar-dropbar" />
    </div>
    <div className="uk-position-relative">
      <nav
        className="uk-navbar-container"
        data-uk-navbar="dropbar: true; dropbar-mode: push"
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <a href="#">Item</a>
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
            <li>
              <a href="#">Item</a>
              <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                <div
                  className="uk-navbar-dropdown-grid uk-child-width-1-2"
                  data-uk-grid
                >
                  <div>
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
                  <div>
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
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
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

      <div className="uk-navbar-dropbar" />
    </div>
    <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav
        className="uk-navbar-container"
        data-uk-navbar
        style={{ position: "relative", zIndex: 980 }}
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
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
                  <li>
                    <a href="#">Item</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
      <nav
        className="uk-navbar-container"
        data-uk-navbar="dropbar: true;"
        style={{ position: "relative", zIndex: 980 }}
      >
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a href="#">Active</a>
            </li>
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
                  <li>
                    <a href="#">Item</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Item</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="uk-section-primary uk-preserve-color">
      <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
        <nav className="uk-navbar-container">
          <div className="uk-container uk-container-expand">
            <div data-uk-navbar>
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <a href="#">Active</a>
                </li>
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
                      <li>
                        <a href="#">Item</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Item</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="uk-section uk-light">
        <div className="uk-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
