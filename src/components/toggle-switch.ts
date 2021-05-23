import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators";

@customElement("toggle-switch")
export class ToggleSwitch extends LitElement {
  static styles = css`
    .toggle-switch {
      display: flex;
      flex-direction: column;
      margin-top: 17px;
    }

    .toggle-switch p {
      margin: auto;
      color: #919191;
      margin-bottom: 5px;
    }

    .switch-wrapper {
      position: relative;
      display: inline-block;
      margin: auto;
      width: 70px;
      height: 140px;
    }

    .switch-wrapper input {
      display: none;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 20px;
      background-color: #ccc;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 64px;
      width: 64px;
      left: 0px;
      bottom: 0px;
      border-radius: 20px;
      border: 3px solid #ccc;
      background-color: white;
      transition: 0.4s;
    }

    input:checked + .slider:before {
      transform: translateY(-70px);
    }
  `;

  @query("input")
  private _checkboxNode!: HTMLInputElement;

  @property({ type: Boolean })
  checked: boolean = false;

  private _handleChange() {
    const { checked } = this._checkboxNode;
    this.checked = checked;
    this.dispatchEvent(
      new Event("toggle-changed", { bubbles: true, composed: true })
    );
  }

  render() {
    return html` <div class="toggle-switch">
      <p id="switch-status">${this.checked ? "ON" : "OFF"}</p>
      <label class="switch-wrapper">
        <input type="checkbox" @change=${this._handleChange} />
        <span class="slider"></span>
      </label>
      <div></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "toggle-switch": ToggleSwitch;
  }
}
