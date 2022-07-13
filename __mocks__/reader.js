export default function read() {
    return new Promise((resolve, reject) => {
        // эмуляция чтения файла
        reject(new Error("Whoops!"));
    });
}
