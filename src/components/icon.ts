import { LitElement, css } from "lit";
import { property } from "lit/decorators";

export class Icon extends LitElement {
  static styles = css`
    svg {
      height: inherit;
      width: inherit;
    }
  `;

  @property({ type: Boolean })
  active?: boolean;
}
