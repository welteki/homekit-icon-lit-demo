import { html } from "lit";
import { customElement } from "lit/decorators";
import { Icon } from "./icon";

@customElement("desklamp-icon")
export class DesklampIcon extends Icon {
  render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="29"
        height="30"
        viewBox="0 0 29 30"
      >
        <g id="Canvas" transform="translate(-43)">
          <g id="desk-Lamp">
            <!-- fixture -->
            <use
              fill=${this.active ? "#FFFFFF" : "#9699A0"}
              transform="translate(43)"
              xlink:href="#path0_fill"
            />
            <!-- bulb -->
            <use
              fill=${this.active ? "#FFCC01" : "#C3C4C7"}
              transform="translate(65.707 9.779)"
              xlink:href="#path1_fill"
            />
          </g>
        </g>
        <defs>
          <path
            id="path0_fill"
            d="M13.275 3.88a.616.616 0 0 1 0-.87l2.83-2.83c.24-.24.63-.24.87 0l3.483 3.483 7.58 1.234a.923.923 0 0 1 .504 1.564l-8.986 8.987a.923.923 0 0 1-1.565-.505l-1.233-7.58-.9-.9-10.796 7.39 4.997 4.21a2.309 2.309 0 0 1 1.945 4.087v4.156h8.928c.68 0 1.231.551 1.231 1.231v1.232c0 .68-.551 1.231-1.231 1.231h-19.7C.551 30 0 29.449 0 28.769v-1.232c0-.68.551-1.23 1.231-1.23h8.004V22.15a2.305 2.305 0 0 1-.922-1.936L3.347 16.03a2.309 2.309 0 1 1 .056-4.362l-.017-.024L13.864 4.47l-.589-.59z"
          />
          <path
            id="path1_fill"
            fill-rule="evenodd"
            d="M4.38 1.61A2.77 2.77 0 0 1 0 3.866L3.865 0c.325.454.516 1.01.516 1.61z"
          />
        </defs>
      </svg>
    `;
  }
}
