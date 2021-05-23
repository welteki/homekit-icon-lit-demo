import { html } from "lit";
import { customElement } from "lit/decorators";
import { Icon } from "./icon";

@customElement("floorlamp-icon")
export class FloorLamp extends Icon {
  constructor() {
    super();

    const theme = {
      shade_active: "#FFCC01",
      shade_inactive: "#C3C4C7",
    };

    this.darkTheme = {
      ...theme,
      stand_active: "#35ABDD",
      stand_inactive: "#9699A0",
    };

    this.ligthTheme = {
      ...theme,
      stand_active: "#FFFFFF",
      stand_inactive: "#FFFFFF",
    };
  }

  render() {
    const { active, palette } = this;
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="15"
        height="30"
        viewBox="0 0 15 30"
      >
        <g id="Canvas" transform="translate(-127)">
          <g id="floor-lamp">
            <!-- shade -->
            <use
              fill=${active ? palette.shade_active : palette.shade_inactive}
              transform="translate(127)"
              xlink:href="#path0_fill"
            />
            <!-- stand -->
            <use
              fill=${active ? palette.stand_active : palette.stand_inactive}
              transform="translate(129.812 10.313)"
              xlink:href="#path1_fill"
            />
          </g>
        </g>
        <defs>
          <path id="path0_fill" d="M1.875 0h11.25L15 9.375H0L1.875 0z" />
          <path
            id="path1_fill"
            d="M5.625 0H3.75v16.875H.625A.625.625 0 0 0 0 17.5v1.563c0 .345.28.625.625.625H8.75c.345 0 .625-.28.625-.625V17.5a.625.625 0 0 0-.625-.625H5.625V0z"
          />
        </defs>
      </svg>
    `;
  }
}
