export const setData = (data: any) => {
    window.localStorage.setItem('data', JSON.stringify(data))
}

export const getData = () => {
    const data = window.localStorage.getItem('data')
    return data ? JSON.parse(data) : null
}