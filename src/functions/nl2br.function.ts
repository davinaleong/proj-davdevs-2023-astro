function nl2br(string: string): string {
    return string.replace(/(?:\r\n|\r|\n)/g, '<br/>')
}

export default nl2br