import { html } from "lit";
import { customElement } from "lit/decorators";
import { Icon } from "./icon";

@customElement("bulb-icon")
export class BulbIcon extends Icon {
  constructor() {
    super();

    const theme = {
      dome_active: "#FFCC01",
      dome_inactive: "#C3C4C7",
    };

    this.darkTheme = {
      ...theme,
      base: "#9699A0",
    };

    this.ligthTheme = {
      ...theme,
      base: "#FFFFFF",
    };
  }

  render() {
    const { active, palette } = this;
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="18"
        height="30"
        viewBox="0 0 18 30"
      >
        <g id="Canvas" transform="translate(-158)">
          <g id="bulb">
            <!-- base -->
            <g fill=${palette.base} transform="translate(163.795 24.886)">
              <use xlink:href="#path0_fill" />
              <use xlink:href="#path1_fill" />
            </g>
            <!-- dome -->
            <use
              fill=${active ? palette.dome_active : palette.dome_inactive}
              transform="translate(158)"
              xlink:href="#path2_fill"
            />
          </g>
        </g>
        <defs>
          <path id="path0_fill" d="M0 0h6.136v3.068H0V0z" />
          <path
            id="path1_fill"
            d="M.724 3.75s-.17.34.17.682c.342.34 1.29.682 2.174.682.883 0 1.833-.341 2.173-.682.341-.341.17-.682.17-.682H.725z"
          />
          <path
            id="path2_fill"
            d="M0 10.227C0 2.387 4.773 0 8.864 0c4.09 0 8.863 2.386 8.863 10.227 0 4.432-4.773 12.955-6.477 13.637-.736.294-1.3.335-2.386.34-1.087-.005-1.65-.046-2.387-.34C4.773 23.182 0 14.659 0 10.227z"
          />
        </defs>
      </svg>
    `;
  }
}
