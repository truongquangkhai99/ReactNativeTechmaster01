export const logAlert = (string, obj) => {
    alert(`${string} ${JSON.stringify(obj)}`);
}

export const logString = (string, obj) => {
    console.log(`${string} ${JSON.stringify(obj)}`);
}