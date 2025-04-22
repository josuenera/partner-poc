import { Disclaimer } from './Disclaimer';

export class ComafiDisclaimer implements Disclaimer {
  getDisclaimerText(): string {
    return "Disclaimer Comafi: Lea los términos...";
  }
}