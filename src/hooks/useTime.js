export const useTime = () => {
    const time = () => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = time;
        return <h3>{dateTime}</h3>;
    }
    
    return {
        time
    };
}
