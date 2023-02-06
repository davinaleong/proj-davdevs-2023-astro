function sortArrayDesc(array: any): any {
    const sorted: any = [...array]
    return sorted.sort((a: any, b: any) => {
        const A = a.frontmatter.sortOrder
        const B = b.frontmatter.sortOrder
    
        let comparison = 0
        if (A > B) {
            comparison = -1
        } else if (A < B) {
            comparison = 1
        } else {
            comparison = 0
        }
    
        return comparison
    })
}

export default sortArrayDesc