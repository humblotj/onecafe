import { createContext } from 'react';

/* Define a context
This context will pass favourite and a method to set your favourite
Set the value of your context in the value property of your provider --> check App.js
 */
export default createContext({ favourite: '', setFavourite: () => {} });
