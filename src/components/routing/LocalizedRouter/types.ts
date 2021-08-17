import React from 'react';

import {AppLanguage} from '~/constants';
import {LanguageStrings} from '~/localization';

export interface ILocalizedRouterProps {
  defaultLanguage?: AppLanguage;
  languages: {[k: number]: string};
  RouterComponent: React.ComponentClass<any>;
  appStrings: {[prop: string]: LanguageStrings};
}
