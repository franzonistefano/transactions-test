import { createContext } from 'react';
import { createContextualCan } from '@casl/react';
import { Ability } from '@casl/ability';

/*
  * Crea un oggetto context, inizializza le proprietà che saranno passate
  * all'interno del context della libreria Can.
*/
export const AbilityContext = createContext(new Ability());
export const Can = createContextualCan(AbilityContext.Consumer);