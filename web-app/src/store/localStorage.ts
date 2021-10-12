export const loadState = (state:string) => {
    try {
        const serializedState = localStorage.getItem(state);

        if (serializedState === null) {
            return undefined;
        }
        return serializedState;
    } catch (err) {
        console.debug("Errore ", err);
        return undefined;
    }
}