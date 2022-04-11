import { Radio } from '@waves/waves-data';
import radioDefinitions from '../data/radios.json';

const assetPath = (path: string): string => `${process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : ''}/${path}`;

const getPreviousRadio = (radio: Radio): Radio => {
    const currentRadioIndex = radioDefinitions.findIndex((element) => element.slug === radio.slug);

    if (currentRadioIndex === -1) {
        return radioDefinitions[0];
    }

    if (currentRadioIndex === 0) {
        return radioDefinitions[radioDefinitions.length - 1];
    }

    return radioDefinitions[currentRadioIndex - 1];
}

const getNextRadio = (radio: Radio): Radio => {
    const currentRadioIndex = radioDefinitions.findIndex((element) => element.slug === radio.slug);

    if (currentRadioIndex === -1 || currentRadioIndex === radioDefinitions.length - 1) {
        return radioDefinitions[0];
    }

    return radioDefinitions[currentRadioIndex + 1];
}

export { assetPath, getPreviousRadio, getNextRadio };