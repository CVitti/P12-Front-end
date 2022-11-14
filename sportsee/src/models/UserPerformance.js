/**
 * Formatting kind value to display French name instead of index and reverse their order to be displayed in the chart
 */
export default class UserPerformance{
    /**
     * @construct UserPerformance 
     * @param {object} data - User performance
     */
    constructor(data){
        const kind = {
            1: 'Cardio',
            2: 'Energie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité'
        };

        for (const perfKind in data.data) {
            data.data[perfKind].kind = kind[parseInt(perfKind) + 1];
        }

        // Invert data order to display in a mirrored order into the Radar Chart
        this.data = Object.values(data.data).reverse();
    }
}