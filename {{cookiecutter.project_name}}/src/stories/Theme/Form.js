import React from "react";

const Form = () => (
  <div>
    <form>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Legend</legend>

        <div className="uk-margin">
          <input className="uk-input" type="text" placeholder="Input" />
        </div>

        <div className="uk-margin">
          <select className="uk-select">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>

        <div className="uk-margin">
          <textarea className="uk-textarea" rows="5" placeholder="Textarea" />
        </div>

        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <label>
            <input className="uk-radio" type="radio" name="radio2" checked /> A
          </label>
          <label>
            <input className="uk-radio" type="radio" name="radio2" /> B
          </label>
        </div>

        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <label>
            <input className="uk-checkbox" type="checkbox" checked /> A
          </label>
          <label>
            <input className="uk-checkbox" type="checkbox" /> B
          </label>
        </div>

        <div className="uk-margin">
          <input
            className="uk-range"
            type="range"
            value="2"
            min="0"
            max="10"
            step="0.1"
          />
        </div>
      </fieldset>
    </form>
    <div>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-danger uk-form-width-medium"
          type="text"
          placeholder="form-danger"
          value="form-danger"
        />
      </div>

      <div className="uk-margin">
        <input
          className="uk-input uk-form-success uk-form-width-medium"
          type="text"
          placeholder="form-success"
          value="form-success"
        />
      </div>

      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-medium"
          type="text"
          placeholder="disabled"
          value="disabled"
          disabled
        />
      </div>
    </div>
    <form>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-medium uk-form-large"
          type="text"
          placeholder="Large"
        />
      </div>

      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-medium"
          type="text"
          placeholder="Default"
        />
      </div>

      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-medium uk-form-small"
          type="text"
          placeholder="Small"
        />
      </div>
    </form>
    <form>
      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-large"
          type="text"
          placeholder="Large"
        />
      </div>

      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-medium"
          type="text"
          placeholder="Medium"
        />
      </div>

      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-small"
          type="text"
          placeholder="Small"
        />
      </div>

      <div className="uk-margin">
        <input
          className="uk-input uk-form-width-xsmall"
          type="text"
          placeholder="XSmall"
        />
      </div>
    </form>
    <form>
      <input
        className="uk-input uk-width-1-2"
        type="text"
        placeholder="uk-width-1-2"
      />
    </form>
    <form>
      <input
        className="uk-input uk-form-blank uk-form-width-medium"
        type="text"
        placeholder="Form blank"
      />
    </form>
    <form className="uk-form-stacked">
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-stacked-text">
          Text
        </label>
        <div className="uk-form-controls">
          <input
            className="uk-input"
            id="form-stacked-text"
            type="text"
            placeholder="Some text..."
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-stacked-select">
          Select
        </label>
        <div className="uk-form-controls">
          <select className="uk-select" id="form-stacked-select">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-form-label">Radio</div>
        <div className="uk-form-controls">
          <label>
            <input className="uk-radio" type="radio" name="radio1" /> Option 01
          </label>
          <br />
          <label>
            <input className="uk-radio" type="radio" name="radio1" /> Option 02
          </label>
        </div>
      </div>
    </form>
    <form className="uk-form-horizontal uk-margin-large">
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">
          Text
        </label>
        <div className="uk-form-controls">
          <input
            className="uk-input"
            id="form-horizontal-text"
            type="text"
            placeholder="Some text..."
          />
        </div>
      </div>

      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-select">
          Select
        </label>
        <div className="uk-form-controls">
          <select className="uk-select" id="form-horizontal-select">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-form-label">Radio</div>
        <div className="uk-form-controls uk-form-controls-text">
          <label>
            <input className="uk-radio" type="radio" name="radio1" /> Option 01
          </label>
          <br />
          <label>
            <input className="uk-radio" type="radio" name="radio1" /> Option 02
          </label>
        </div>
      </div>
    </form>
    <form>
      <div className="uk-margin">
        <div className="uk-inline">
          <span className="uk-form-icon icon-user-circle-o" data-uk-icon />
          <input className="uk-input" type="text" />
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline">
          <span
            className="uk-form-icon uk-form-icon-flip icon-lock"
            data-uk-icon
          />
          <input className="uk-input" type="text" />
        </div>
      </div>
    </form>
    <form>
      <div className="uk-margin">
        <div className="uk-inline">
          <a className="uk-form-icon" href="#" data-uk-icon>
            <span className="icon-pencil" />
          </a>
          <input className="uk-input" type="text" />
        </div>
      </div>

      <div className="uk-margin">
        <div className="uk-inline">
          <a className="uk-form-icon uk-form-icon-flip" href="#" data-uk-icon>
            <span className="icon-link" />
          </a>
          <input className="uk-input" type="text" />
        </div>
      </div>
    </form>
    <form className="uk-grid-small" data-uk-grid>
      <div className="uk-width-1-1">
        <input className="uk-input" type="text" placeholder="100" />
      </div>
      <div className="uk-width-1-2@s">
        <input className="uk-input" type="text" placeholder="50" />
      </div>
      <div className="uk-width-1-4@s">
        <input className="uk-input" type="text" placeholder="25" />
      </div>
      <div className="uk-width-1-4@s">
        <input className="uk-input" type="text" placeholder="25" />
      </div>
      <div className="uk-width-1-2@s">
        <input className="uk-input" type="text" placeholder="50" />
      </div>
      <div className="uk-width-1-2@s">
        <input className="uk-input" type="text" placeholder="50" />
      </div>
    </form>
    <form>
      <div className="uk-margin">
        <div data-uk-form-custom>
          <input type="file" />
          <button
            className="uk-button uk-button-default"
            type="button"
            tabIndex="-1"
          >
            Select
          </button>
        </div>
      </div>

      <div className="uk-margin">
        <span className="uk-text-middle">Here is a text</span>
        <div data-uk-form-custom>
          <input type="file" />
          <span className="uk-link">upload</span>
        </div>
      </div>

      <div className="uk-margin" data-uk-margin>
        <div data-uk-form-custom="target: true">
          <input type="file" />
          <input
            className="uk-input uk-form-width-medium"
            type="text"
            placeholder="Select file"
            disabled
          />
        </div>
        <button className="uk-button uk-button-default">Submit</button>
      </div>
    </form>
    <form>
      <div className="uk-margin">
        <div data-uk-form-custom="target: true">
          <select>
            <option value="1">Option 01</option>
            <option value="2">Option 02</option>
            <option value="3">Option 03</option>
            <option value="4">Option 04</option>
          </select>
          <span />
        </div>
      </div>

      <div className="uk-margin">
        <div data-uk-form-custom="target: > * > span:last-child">
          <select>
            <option value="1">Option 01</option>
            <option value="2">Option 02</option>
            <option value="3">Option 03</option>
            <option value="4">Option 04</option>
          </select>
          <span className="uk-link">
            <span className="icon-pencil" />
            <span />
          </span>
        </div>
      </div>

      <div className="uk-margin">
        <div data-uk-form-custom="target: > * > span:first-child">
          <select>
            <option value="">Please select...</option>
            <option value="1">Option 01</option>
            <option value="2">Option 02</option>
            <option value="3">Option 03</option>
            <option value="4">Option 04</option>
          </select>
          <button
            className="uk-button uk-button-default"
            type="button"
            tabIndex="-1"
          >
            <span />
            <span className="icon-angle-down" />
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default Form;
