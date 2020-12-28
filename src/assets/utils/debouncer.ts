// const debounce = (func: () => void, delay: number, isImmediate: boolean) => {
//
//     let timeout: any
//
//     return function() {
//         const args: IArguments = arguments
//         const callNow = isImmediate && !timeout
//         clearTimeout(timeout)
//
//         timeout = setTimeout(function() {
//
//             timeout = null
//
//             if (!isImmediate) {
//
//                 func.apply(this, args)
//             }
//         }, delay)
//
//         if (callNow) func.apply(this, args)
//     }
// }
