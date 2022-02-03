import { connectToParent } from "penpal"
import { handlers } from "../handlers/index"

export class Connection {
    constructor() {}

    async init() {
        const connection = connectToParent({
            // Methods child is exposing to parent.
            methods: {
                ...handlers,
                multiply(num1, num2) {
                    return num1 * num2
                },
                divide(num1, num2) {
                    // Return a promise if the value being
                    // returned requires asynchronous processing.
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(num1 / num2)
                        }, 1000)
                    })
                },
            },
        })

        const parent = await connection.promise
        return parent
    }
}
