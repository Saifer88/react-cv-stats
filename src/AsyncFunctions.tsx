

export async function fetchData(link: RequestInfo) {
    return (await fetch(link)).json();
}