export function parseLightColor(inputColor) {
    let color;
        switch (inputColor) {
            case 'blue':
                color = 'rgb(147,197,253)';
                break;
            case 'green':
                color = 'rgb(112,231,183)';
                break;
            case 'red':
                color = 'rgb(252,165,165)';
                break;
            case 'yellow':
                color = 'rgb(252,211,79)';
                break;
            default:
                break;
        }
        return color;
}