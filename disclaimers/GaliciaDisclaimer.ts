import { Disclaimer } from './Disclaimer';

export class GaliciaDisclaimer implements Disclaimer {
  getDisclaimerText(): string {
    return "Disclaimer Galicia: Información confidencial...";
  }
}