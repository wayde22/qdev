// These are "action constants" that are used to keep from making spelling mistakes that could arise later with errors

export const CHANGE_WHIZ_TO_BANG = 'CHANGE_WHIZ_TO_BANG';

export const CHANGE_BAR_TO_RANDOM = 'CHANGE_BAR_TO_RANDOM';

export const CHANGE_SOMETHING = 'CHANGE_SOMETHING';

export const changeNumber = () => ({ type: CHANGE_BAR_TO_RANDOM, payload: Math.floor(Math.random() * 100)});

export const changeWhiz = () => ({ type: CHANGE_WHIZ_TO_BANG, payload: 'Bang!!!'})

export const changeSome = () => ({ type: CHANGE_SOMETHING, payload: 'WOW!!!'})