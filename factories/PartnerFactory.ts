import { Partner } from '../partners/Partner';
import { GaliciaPartner } from '../partners/GaliciaPartner';
import { ComafiPartner } from '../partners/ComafiPartner';
import { Disclaimer } from '../disclaimers/Disclaimer';
import { GaliciaDisclaimer } from '../disclaimers/GaliciaDisclaimer';
import { ComafiDisclaimer } from '../disclaimers/ComafiDisclaimer';

export class PartnerFactory {
  static getPartner(partnerId: string): Partner {
    switch (partnerId.toUpperCase()) {
      case 'GALICIA':
        return new GaliciaPartner();
      case 'COMAFI':
        return new ComafiPartner();
      default:
        throw new Error(`Partner ${partnerId} no soportado`);
    }
  }

  static getDisclaimer(partnerId: string): Disclaimer {
    switch (partnerId.toUpperCase()) {
      case 'GALICIA':
        return new GaliciaDisclaimer();
      case 'COMAFI':
        return new ComafiDisclaimer();
      default:
        throw new Error(`Disclaimer para ${partnerId} no soportado`);
    }
  }
}