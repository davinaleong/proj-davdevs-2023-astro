function sortArray(array: any): any {
    const sorted: any = array.splice()
    return sorted.sort((a: any, b: any) => {
        const A = a.sortOrder.toLowerCase();
        const B = b.sortOrder.toLowerCase();
    
        let comparison = 0;
        if (A > B) {
            comparison = 1;
        } else if (A < B) {
            comparison = -1;
        } else {
            comparison = 0;
        }
    
        return comparison;
    })
}

export default sortArray