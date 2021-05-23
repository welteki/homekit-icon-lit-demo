import { html } from "lit";
import { customElement } from "lit/decorators";
import { Icon } from "./icon";

@customElement("fan-icon")
export class FanIcon extends Icon {
  constructor() {
    super();

    this.darkTheme = {
      stand: "#9699A0",
      background_active: "#EEEDF2",
      background_inactive: "#C3C4C7",
      blades_active: "#35ABDD",
      blades_inactive: "#737373",
    };

    this.ligthTheme = {
      stand: "#FFFFFF",
      background_active: "#C3C4C7",
      background_inactive: "#C3C4C7",
      blades_active: "#35ABDD",
      blades_inactive: "#FFFFFF",
    };
  }

  render() {
    const { active, palette } = this;
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="27"
        height="30"
        viewBox="0 0 27 30"
      >
        <g id="Canvas" transform="translate(-185)">
          <g id="fan">
            <!-- background -->
            <use
              fill=${active
                ? palette.background_active
                : palette.background_inactive}
              transform="translate(185)"
              xlink:href="#path0_fill"
            />
            <!-- blades -->
            <g
              fill=${active ? palette.blades_active : palette.blades_inactive}
              transform="translate(185.798 .9)"
            >
              <use xlink:href="#path1_fill" />
              <use xlink:href="#path2_fill" />
              <use xlink:href="#path3_fill" />
            </g>
            <!-- stand -->
            <g fill=${palette.stand} transform="translate(189.688 10.938)">
              <use xlink:href="#path4_fill" />
              <use xlink:href="#path5_fill" />
            </g>
          </g>
        </g>
        <defs>
          <path
            id="path0_fill"
            d="M26.25 13.125c0 7.249-5.876 13.125-13.125 13.125S0 20.374 0 13.125 5.876 0 13.125 0 26.25 5.876 26.25 13.125z"
          />
          <path
            id="path1_fill"
            d="M10.479 8.961a3.75 3.75 0 0 1 4.94 1.141l.017.002c1.227-2.01 3.353-2.433 4.935-2.748 1.66-.331 2.723-.543 1.519-2.344-1.984-3.186-5.6-5.448-9.982-4.941-2.401.47-6.688 1.657-1.957 9.25.163-.132.339-.253.528-.36z"
          />
          <path
            id="path2_fill"
            d="M8.944 10.606A3.75 3.75 0 0 0 11 15.732c-4.214 7.893-7.384 4.772-8.991 2.927-2.628-3.543-2.476-7.805-.707-11.115.959-1.943 1.672-1.129 2.789.144 1.063 1.213 2.492 2.843 4.846 2.902l.007.016z"
          />
          <path
            id="path3_fill"
            d="M12.65 15.96a3.75 3.75 0 0 0 3.373-4.373c8.94-.374 7.86 3.94 7.085 6.262-1.718 4.063-5.468 6.094-9.219 6.25-2.16.16-1.82-.868-1.29-2.476.505-1.532 1.184-3.59.04-5.649l.01-.014z"
          />
          <path
            id="path4_fill"
            d="M8.438 4.375a2.187 2.187 0 1 0 0-4.375 2.187 2.187 0 0 0 0 4.375z"
          />
          <path
            id="path5_fill"
            d="M6.563 16.25v-1.07a13.235 13.235 0 0 0 3.75 0v1.07h5.312c.69 0 1.25.56 1.25 1.25v1.563H0V17.5c0-.69.56-1.25 1.25-1.25h5.313z"
          />
        </defs>
      </svg>
    `;
  }
}
