export function parseDate(postDate) {
    const publishedDate = new Date(postDate)
        let year = publishedDate.getFullYear();
        //parse month
        let month = publishedDate.getMonth();
        let monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' ,'December']
        month = monthOptions[month];
        //parse date
        let date = publishedDate.getDate();
        switch (date) {
            case 1: case 21: case 31 :
                date = `${date}st`;
                break;
            case 2: case 22: 
                date = `${date}nd`;
                break;
            case 3: case 23:
                date = `${date}rd`;
                break;
            default:
                date = `${date}th`;
                break;
        }
        return `${month} ${date} ${year}`
}