import { html } from "lit";
import { customElement } from "lit/decorators";
import { Icon } from "./icon";

@customElement("outlet-icon")
export class OutletIcon extends Icon {
  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <g id="Canvas" transform="translate(-20 -13)">
          <g id="outlet">
            <!-- frame -->
            <use
              fill=${this.active ? "#FFFFFF" : "#C3C4C7"}
              transform="translate(20 13)"
              xlink:href="#path0_fill"
            />
            <!-- center -->
            <use
              fill-opacity="0.0"
              transform="translate(26 20)"
              xlink:href="#path1_fill"
            />
            <!-- plug holes -->
            <g
              fill=${this.active ? "#FFFFFF" : "#C3C4C7"}
              transform="translate(31.333 25)"
            >
              <use xlink:href="#path2_fill" />
              <use xlink:href="#path3_fill" />
            </g>
          </g>
        </g>
        <defs>
          <path
            id="path0_fill"
            fill-rule="evenodd"
            d="M5 0a5 5 0 0 0-5 5v20a5 5 0 0 0 5 5h20a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5zm1 15c0-5 2.667-8 2.667-8h12.666S24 10 24 15s-2.667 8-2.667 8H8.667S6 20 6 15z"
          />
          <path
            id="path1_fill"
            fill-rule="evenodd"
            d="M0 8c0-5 2.667-8 2.667-8h12.666S18 3 18 8s-2.667 8-2.667 8H2.667S0 13 0 8zm5.333-2.333a.667.667 0 0 1 1.334 0v4.666a.667.667 0 1 1-1.334 0V5.667zm6 0a.667.667 0 1 1 1.334 0v4.666a.667.667 0 0 1-1.334 0V5.667z"
          />
          <path
            id="path2_fill"
            d="M.667 0A.667.667 0 0 0 0 .667v4.666a.667.667 0 1 0 1.333 0V.667A.667.667 0 0 0 .667 0z"
          />
          <path
            id="path3_fill"
            d="M6.667 0A.667.667 0 0 0 6 .667v4.666a.667.667 0 0 0 1.333 0V.667A.667.667 0 0 0 6.667 0z"
          />
        </defs>
      </svg>
    `;
  }
}
