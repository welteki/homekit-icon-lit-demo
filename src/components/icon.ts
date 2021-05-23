import { LitElement, css } from "lit";
import { property } from "lit/decorators";

export class Icon extends LitElement {
  protected ligthTheme: any = {};
  protected darkTheme: any = {};

  static styles = css`
    svg {
      height: inherit;
      width: inherit;
    }
  `;

  @property({ type: Boolean })
  active?: boolean;

  @property({ type: String })
  variant?: "dark" | "light" = "dark";

  protected get palette() {
    return this.variant === "light" ? this.ligthTheme : this.darkTheme;
  }
}
