import { html } from "lit";
import { customElement } from "lit/decorators";
import { Icon } from "./icon";

@customElement("lamp-icon")
export class LampIcon extends Icon {
  constructor() {
    super();

    const theme = {
      bulb_active: "#FFCC01",
      bulb_inactive: "#C3C4C7",
    };

    this.darkTheme = {
      ...theme,
      wire_active: "#D2D1D7",
      wire_inactive: "#9699A0",
      fixture_active: "#35ABDD",
      fixture_inactive: "#9699A0",
    };

    this.ligthTheme = {
      ...theme,
      wire_active: "#FFFFFF",
      wire_inactive: "#FFFFFF",
      fixture_active: "#FFFFFF",
      fixture_inactive: "#FFFFFF",
    };
  }

  render() {
    const { active, palette } = this;

    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="25"
        height="30"
        viewBox="0 0 25 30"
      >
        <g id="Canvas" transform="translate(-87)">
          <g id="ceiling-lamp">
            <!-- bulb -->
            <use
              fill=${active ? palette.bulb_active : palette.bulb_inactive}
              transform="translate(95.125 26.25)"
              xlink:href="#path0_fill"
            />
            <!-- fixture -->
            <use
              fill=${active ? palette.fixture_active : palette.fixture_inactive}
              transform="translate(87 6.563)"
              xlink:href="#path1_fill"
            />
            <!-- wire -->
            <use
              fill=${active ? palette.wire_active : palette.wire_inactive}
              transform="translate(98.25)"
              xlink:href="#path2_fill"
            />
          </g>
        </g>
        <defs>
          <path
            id="path0_fill"
            d="M0 0h7.813a3.915 3.915 0 0 1-3.907 3.75A3.915 3.915 0 0 1 0 0z"
          />
          <path
            id="path1_fill"
            d="M10.313.625c0-.345.28-.625.624-.625h2.5c.346 0 .626.28.626.625v2.813c7.5 2.187 10.312 8.124 10.312 11.562 0 3.438-1.094 3.75-1.094 3.75H1.094S0 18.437 0 15 2.813 5.625 10.313 3.437V.626z"
          />
          <path id="path2_fill" d="M0 .313L1.875 0v5.625H0V.312z" />
        </defs>
      </svg>
    `;
  }
}
