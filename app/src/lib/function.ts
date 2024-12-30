
export function parsePathnameToBreadcrumbs(path: string) : string[] {
    const segment = path.split("/").filter(s => s);
    return segment.slice(-3);
}

export function capitalFirst(str: string){
    if(str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
