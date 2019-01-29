import React from "react";

const Filter = () => (
  <div>
    <div data-uk-filter="target: .js-filter">
      <ul className="uk-subnav uk-subnav-pill">
        <li data-uk-filter-control=".tag-white">
          <a href="#">White</a>
        </li>
        <li data-uk-filter-control=".tag-blue">
          <a href="#">Blue</a>
        </li>
        <li data-uk-filter-control=".tag-black">
          <a href="#">Black</a>
        </li>
      </ul>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        data-uk-grid
      >
        <li className="tag-white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li className="tag-blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li className="tag-white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li className="tag-white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li className="tag-black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li className="tag-black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li className="tag-blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li className="tag-black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li className="tag-blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li className="tag-white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li className="tag-blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li className="tag-black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
      </ul>
    </div>
    <div data-uk-filter="target: .js-filter">
      <ul className="uk-subnav uk-subnav-pill">
        <li className="uk-active" data-uk-filter-control="[data-color='white']">
          <a href="#">White</a>
        </li>
        <li data-uk-filter-control="[data-color='blue']">
          <a href="#">Blue</a>
        </li>
        <li data-uk-filter-control="[data-color='black']">
          <a href="#">Black</a>
        </li>
      </ul>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        data-uk-grid
      >
        <li data-color="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
      </ul>
    </div>
    <div data-uk-filter="target: .js-filter">
      <ul className="uk-subnav uk-subnav-pill">
        <li className="uk-active" data-uk-filter-control>
          <a href="#">All</a>
        </li>
        <li data-uk-filter-control="[data-color='white']">
          <a href="#">White</a>
        </li>
        <li data-uk-filter-control="[data-color='blue']">
          <a href="#">Blue</a>
        </li>
        <li data-uk-filter-control="[data-color='black']">
          <a href="#">Black</a>
        </li>
      </ul>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        data-uk-grid
      >
        <li data-color="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
      </ul>
    </div>
    <div data-uk-filter="target: .js-filter">
      <ul className="uk-subnav uk-subnav-pill">
        <li data-uk-filter-control="[data-tags*='white']">
          <a href="#">White</a>
        </li>
        <li data-uk-filter-control="[data-tags*='blue']">
          <a href="#">Blue</a>
        </li>
        <li data-uk-filter-control="[data-tags*='black']">
          <a href="#">Black</a>
        </li>
        <li data-uk-filter-control="[data-tags*='dark']">
          <a href="#">Dark Colors</a>
        </li>
      </ul>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        data-uk-grid
      >
        <li data-tags="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="blue dark">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="black dark">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="black dark">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="blue dark">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="black dark">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-tags="blue dark">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="white">
          <div className="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-tags="blue dark">
          <div className="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-tags="black dark">
          <div className="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
      </ul>
    </div>
    <div data-uk-filter="target: .js-filter">
      <div
        className="uk-grid-small uk-grid-divider uk-child-width-auto"
        data-uk-grid
      >
        <div>
          <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
            <li className="uk-active" data-uk-filter-control>
              <a href="#">All</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
            <li data-uk-filter-control="[data-color='white']">
              <a href="#">White</a>
            </li>
            <li data-uk-filter-control="[data-color='blue']">
              <a href="#">Blue</a>
            </li>
            <li data-uk-filter-control="[data-color='black']">
              <a href="#">Black</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
            <li data-uk-filter-control="[data-size='small']">
              <a href="#">Small</a>
            </li>
            <li data-uk-filter-control="[data-size='medium']">
              <a href="#">Medium</a>
            </li>
            <li data-uk-filter-control="[data-size='large']">
              <a href="#">Large</a>
            </li>
          </ul>
        </div>
      </div>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        data-uk-grid="masonry: true"
      >
        <li data-color="white" data-size="large">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="blue" data-size="small">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="white" data-size="medium">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="white" data-size="small">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="black" data-size="medium">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="black" data-size="small">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="blue" data-size="medium">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="black" data-size="large">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="blue" data-size="large">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="white" data-size="large">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="blue" data-size="medium">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="black" data-size="small">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
      </ul>
    </div>
    <div data-uk-filter="target: .js-filter">
      <div
        className="uk-grid-small uk-grid-divider uk-child-width-auto"
        data-uk-grid
      >
        <div>
          <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
            <li className="uk-active" data-uk-filter-control>
              <a href="#">All</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
            <li data-uk-filter-control="filter: [data-color='white']; group: data-color">
              <a href="#">White</a>
            </li>
            <li data-uk-filter-control="filter: [data-color='blue']; group: data-color">
              <a href="#">Blue</a>
            </li>
            <li data-uk-filter-control="filter: [data-color='black']; group: data-color">
              <a href="#">Black</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
            <li data-uk-filter-control="filter: [data-size='small']; group: size">
              <a href="#">Small</a>
            </li>
            <li data-uk-filter-control="filter: [data-size='medium']; group: size">
              <a href="#">Medium</a>
            </li>
            <li data-uk-filter-control="filter: [data-size='large']; group: size">
              <a href="#">Large</a>
            </li>
          </ul>
        </div>
      </div>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        data-uk-grid="masonry: true"
      >
        <li data-color="white" data-size="large">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="blue" data-size="small">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="white" data-size="medium">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="white" data-size="small">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="black" data-size="medium">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="black" data-size="small">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="blue" data-size="medium">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="black" data-size="large">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="blue" data-size="large">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="white" data-size="large">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="blue" data-size="medium">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
        <li data-color="black" data-size="small">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">Item</div>
          </div>
        </li>
      </ul>
    </div>
    <div data-uk-filter="target: .js-filter">
      <ul className="uk-subnav uk-subnav-pill">
        <li className="uk-active" data-uk-filter-control="sort: data-date">
          <a href="#">Ascending</a>
        </li>
        <li data-uk-filter-control="sort: data-date; order: desc">
          <a href="#">Descending</a>
        </li>
      </ul>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        data-uk-grid
      >
        <li data-date="2016-06-01">
          <div className="uk-card uk-card-default uk-card-body">2016-06-01</div>
        </li>
        <li data-date="2016-12-13">
          <div className="uk-card uk-card-primary uk-card-body">2016-12-13</div>
        </li>
        <li data-date="2017-05-20">
          <div className="uk-card uk-card-default uk-card-body">2017-05-20</div>
        </li>
        <li data-date="2017-09-17">
          <div className="uk-card uk-card-default uk-card-body">2017-09-17</div>
        </li>
        <li data-date="2017-11-03">
          <div className="uk-card uk-card-secondary uk-card-body">
            2017-11-03
          </div>
        </li>
        <li data-date="2017-12-25">
          <div className="uk-card uk-card-secondary uk-card-body">
            2017-12-25
          </div>
        </li>
        <li data-date="2018-01-30">
          <div className="uk-card uk-card-primary uk-card-body">2018-01-30</div>
        </li>
        <li data-date="2018-02-01">
          <div className="uk-card uk-card-secondary uk-card-body">
            2018-02-01
          </div>
        </li>
        <li data-date="2018-03-11">
          <div className="uk-card uk-card-primary uk-card-body">2018-03-11</div>
        </li>
        <li data-date="2018-06-13">
          <div className="uk-card uk-card-default uk-card-body">2018-06-13</div>
        </li>
        <li data-date="2018-10-27">
          <div className="uk-card uk-card-primary uk-card-body">2018-10-27</div>
        </li>
        <li data-date="2018-12-02">
          <div className="uk-card uk-card-secondary uk-card-body">
            2018-12-02
          </div>
        </li>
      </ul>
    </div>
    <div data-uk-filter="target: .js-filter">
      <div className="uk-grid-small uk-flex-middle" data-uk-grid>
        <div className="uk-width-expand">
          <div
            className="uk-grid-small uk-grid-divider uk-child-width-auto"
            data-uk-grid
          >
            <div>
              <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
                <li className="uk-active" data-uk-filter-control>
                  <a href="#">All</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
                <li data-uk-filter-control="[data-color='white']">
                  <a href="#">White</a>
                </li>
                <li data-uk-filter-control="[data-color='blue']">
                  <a href="#">Blue</a>
                </li>
                <li data-uk-filter-control="[data-color='black']">
                  <a href="#">Black</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-subnav uk-subnav-pill" data-uk-margin>
                <li data-uk-filter-control="[data-size='small']">
                  <a href="#">Small</a>
                </li>
                <li data-uk-filter-control="[data-size='medium']">
                  <a href="#">Medium</a>
                </li>
                <li data-uk-filter-control="[data-size='large']">
                  <a href="#">Large</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="uk-width-auto uk-text-nowrap">
          <span className="uk-active" data-uk-filter-control="sort: data-name">
            <a className="uk-icon-link" href="#">
              <span className="icon-down-open" />
            </a>
          </span>
          <span data-uk-filter-control="sort: data-name; order: desc">
            <a className="uk-icon-link" href="#">
              <span className="icon-up-open" />
            </a>
          </span>
        </div>
      </div>

      <ul
        className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        data-uk-grid="masonry: true"
      >
        <li data-color="white" data-size="large" data-name="A">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">A</div>
          </div>
        </li>
        <li data-color="blue" data-size="small" data-name="B">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">B</div>
          </div>
        </li>
        <li data-color="white" data-size="medium" data-name="C">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">C</div>
          </div>
        </li>
        <li data-color="white" data-size="small" data-name="D">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">D</div>
          </div>
        </li>
        <li data-color="black" data-size="medium" data-name="E">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">E</div>
          </div>
        </li>
        <li data-color="black" data-size="small" data-name="F">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">F</div>
          </div>
        </li>
        <li data-color="blue" data-size="medium" data-name="G">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">G</div>
          </div>
        </li>
        <li data-color="black" data-size="large" data-name="H">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">H</div>
          </div>
        </li>
        <li data-color="blue" data-size="large" data-name="I">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">I</div>
          </div>
        </li>
        <li data-color="white" data-size="large" data-name="J">
          <div className="uk-card uk-card-default uk-card-body">
            <canvas width="600" height="800" />
            <div className="uk-position-center">J</div>
          </div>
        </li>
        <li data-color="blue" data-size="medium" data-name="K">
          <div className="uk-card uk-card-primary uk-card-body">
            <canvas width="600" height="600" />
            <div className="uk-position-center">K</div>
          </div>
        </li>
        <li data-color="black" data-size="small" data-name="L">
          <div className="uk-card uk-card-secondary uk-card-body">
            <canvas width="600" height="400" />
            <div className="uk-position-center">L</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default Filter;
