export class Coin {
    public id: string = undefined;
    public value:string = undefined;
    public name:string = undefined;
    /**
     * metodo statico utilizzato per recuperare l'id dell'entita.
     * @param item
     */
    static selectId: (item: Coin) => string = item => item.id;
}
