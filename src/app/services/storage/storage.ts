export interface Storage {
    read(key: string): any;
    write(key: string, value: string): void
    delete(key: string)
}
