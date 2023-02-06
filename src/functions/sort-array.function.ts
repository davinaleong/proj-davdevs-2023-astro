function sortArray(array: any): any {
    const sorted: any = [...array]
    return sorted.sort((a: any, b: any) => {
        const A = a.sortOrder
        const B = b.sortOrder
    
        let comparison = 0
        if (A > B) {
            comparison = 1
        } else if (A < B) {
            comparison = -1
        } else {
            comparison = 0
        }
    
        return comparison
    })
}

export default sortArray