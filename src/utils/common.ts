export const setData = (data: any) => {
    // @ts-ignore
    window.localStorage.setItem('data', JSON.stringify(data.sort((a: any, b: any) => new Date(a.douDate) - new Date(b.douDate))))
}

export const getData = () => {
    const data = window.localStorage.getItem('data')
    return data ? JSON.parse(data) : []
}